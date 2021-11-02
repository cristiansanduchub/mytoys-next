const fs = require('fs');
const fg = require('fast-glob');

const readPackages = async () => {
    // Find all package.json files in the project
    const entries = await fg(['./src/**/package.json']);

    // Extract `name`, `main` and `path` from package.json
    return entries.map((path) => {
        const data = JSON.parse(fs.readFileSync(path));
        const { name, main } = data;
        return { name, main, path };
    });
};

module.exports = readPackages;
