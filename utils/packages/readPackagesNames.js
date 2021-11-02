const readPackages = require('./readPackages');

const readPackagesNames = async () => {
    const packages = await readPackages();
    return packages.map(({ name }) => name);
};

module.exports = readPackagesNames;
