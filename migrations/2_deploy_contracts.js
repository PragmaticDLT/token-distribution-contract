const DistributionContract = artifacts.require("TokenDistribution");

const fs = require("fs");
const path = require("path");


module.exports = async function(deployer) {
    await deployer.deploy(DistributionContract);

    const addresses = {
        tokenDistributionContractAddress: DistributionContract.address
    };

    await fs.writeFile(
        path.join(__dirname, "..", "build", "addresses.json"),
        JSON.stringify(addresses)
    );
};