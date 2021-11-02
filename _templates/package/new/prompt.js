const readNamespaces = require('../../../utils/packages/readNamespaces');

module.exports = {
    prompt: async ({ prompter }) => {
        const namespaces = await readNamespaces();

        const { namespace } = await prompter.prompt({
            type: 'select',
            name: 'namespace',
            message: 'To which namespace the new package should belong?',
            result: (namespace) => namespace.substr(1),
            choices: namespaces,
        });

        const { slug } = await prompter.prompt({
            type: 'input',
            name: 'slug',
            message: "What's the slug for the package? (e.g. `search-form`)",
        });
        const { title } = await prompter.prompt({
            type: 'input',
            name: 'title',
            message: "What's the title for the package? (e.g. `A new search form implementation`)",
        });
        const { description } = await prompter.prompt({
            type: 'input',
            name: 'description',
            message: "What's the purpose of this package? (e.g. `This package exports a SearchForm component`)",
        });

        return { namespace, slug, title, description };
    },
};
