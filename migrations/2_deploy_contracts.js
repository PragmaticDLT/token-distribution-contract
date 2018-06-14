const BuzzDistributionContract = artifacts.require("BuzzDistribution");

const fs = require("fs");
const path = require("path");


module.exports = async function(deployer) {
    await deployer.deploy(BuzzDistributionContract);

    const addresses = {
        buzzDistributionContractAddress: BuzzDistributionContract.address
    };

    await fs.writeFile(
        path.join(__dirname, "..", "build", "addresses.json"),
        JSON.stringify(addresses)
    );
};