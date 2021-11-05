const prettier = require('prettier');
const { join, dirname, relative } = require('path');
const fs = require('fs');
const readPackages = require('./readPackages');

const whitelist = ['@components', '@packages', '@app', '@packages'];

const log = (msg) => console.log(`🔗 ${msg}`);

const updatePathMappings = async () => {
    log('Updating path mapping...');

    // Find all package.json files in the project
    const packages = await readPackages();
    log(`Found ${packages.length} packages.`);

    // Read `tsconfig.json`
    const tsconfig = JSON.parse(fs.readFileSync('./tsconfig.json'));
    const { compilerOptions } = tsconfig;
    const { paths, baseUrl } = compilerOptions;

    const pathsArray = [];

    // Iterate over non package related paths
    for (const key in paths) {
        if (whitelist.some((item) => key.startsWith(item))) continue;
        pathsArray.push({ key, value: paths[key] });
    }

    // Resolve packages and add to paths
    packages.forEach(({ name, main, path }) => {
        if (!main) {
            throw new Error('🔗 Packages must define a `main` entry file in their package.json.');
        }

        const absoluteMain = join(dirname(path), main);

        // Validate main file
        try {
            fs.accessSync(absoluteMain, fs.constants.F_OK);
        } catch (err) {
            throw new Error(`Could not find main file for package ${name}. Check ${path}`);
        }

        const resolved = relative(baseUrl, absoluteMain);
        pathsArray.push({ key: name, value: [resolved] });
    });

    // Sort alphabetically to avoid changes in order
    pathsArray.sort((a, b) => {
        if (a.key > b.key) return 1;
        if (a.key < b.key) return -1;
        return 0;
    });

    const pathsNext = pathsArray.reduce((acc, { key, value }) => {
        acc[key] = value;
        return acc;
    }, {});

    // Create updated tsconfig
    const tsconfigNext = {
        ...tsconfig,
        compilerOptions: {
            ...tsconfig.compilerOptions,
            paths: pathsNext,
        },
    };
    const data = JSON.stringify(tsconfigNext);

    // Load prettier config
    const prettierConfigFilePath = await prettier.resolveConfigFile();
    const prettierConfig = await prettier.resolveConfig(prettierConfigFilePath);

    // Prettify tsconfig
    const formatted = prettier.format(data, {
        ...prettierConfig,
        parser: 'json',
    });

    fs.writeFile('tsconfig.json', formatted, (err) => {
        if (err) throw err;
        log('Updated `tsconfig.json` with latest paths mappings.');
    });
};

updatePathMappings();
