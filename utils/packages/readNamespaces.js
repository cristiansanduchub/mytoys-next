const readPackagesNames = require('./readPackagesNames');

const readNamespaces = async () => {
    const packageNames = await readPackagesNames();
    return packageNames.reduce((acc, name) => {
        const ns = name.split('/')[0];
        if (!acc.includes(ns)) acc.push(ns);
        return acc;
    }, []);
};

module.exports = readNamespaces;
