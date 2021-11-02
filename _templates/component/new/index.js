const readNamespaces = require('../../../utils/packages/readNamespaces');
const readPackagesNames = require('../../../utils/packages/readPackagesNames');

module.exports = {
    prompt: async ({ prompter }) => {
        const namespaces = await readNamespaces();
        const { namespace } = await prompter.prompt({
            type: 'select',
            name: 'namespace',
            message: 'To which namespace the new component should be added?',
            choices: namespaces,
        });

        const packageNames = await readPackagesNames();
        const filteredPackages = packageNames.filter((name) => name.startsWith(namespace));

        const { package } = await prompter.prompt({
            type: 'select',
            name: 'package',
            message: `To which package within ${namespace} this component should be added?`,
            result: (package) => package.substr(1),
            choices: filteredPackages,
        });

        const { name } = await prompter.prompt({
            type: 'input',
            name: 'name',
            message: "What's the name of your component (e.g. `SearchForm`)",
        });

        const { shouldExport } = await prompter.prompt({
            type: 'confirm',
            name: 'shouldExport',
            message: `Should the component be exported by @${package}?`,
        });

        return { package, name, shouldExport };
    },
};
