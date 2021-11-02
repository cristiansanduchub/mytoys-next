const readNamespaces = require('../../../utils/packages/readNamespaces');
const readPackagesNames = require('../../../utils/packages/readPackagesNames');

module.exports = {
    prompt: async ({ prompter }) => {
        const namespaces = await readNamespaces();
        const { namespace } = await prompter.prompt({
            type: 'select',
            name: 'namespace',
            message: 'To which namespace the new util function should be added?',
            choices: namespaces,
        });

        const packageNames = await readPackagesNames();
        const filteredPackages = packageNames.filter((name) => name.startsWith(namespace));

        const { package } = await prompter.prompt({
            type: 'select',
            name: 'package',
            message: `To which package within ${namespace} this util function should be added?`,
            result: (package) => package.substr(1),
            choices: filteredPackages,
        });

        const { name } = await prompter.prompt({
            type: 'input',
            name: 'name',
            message: "What's the name of the function?",
        });

        const { shouldExport } = await prompter.prompt({
            type: 'confirm',
            name: 'shouldExport',
            message: `Should the util function be exported by @${package}?`,
        });

        return { package, name, shouldExport };
    },
};
