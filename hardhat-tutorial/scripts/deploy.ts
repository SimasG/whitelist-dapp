// Deploying to Goerli
import { ethers } from "hardhat";

const main = async () => {
    /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so whitelistContract here is a factory for instances of our Whitelist contract.
    */
    const whitelistContract = await ethers.getContractFactory("Whitelist");
    // also try "const whitelistContract = await ethers.getContract("Whitelist");"

    // here we deploy the contract
    const deployedWhitelistContract = await whitelistContract.deploy(10);
    // 10 is the Maximum number of whitelisted addresses allowed (constructor arg)

    // Wait for it to finish deploying
    await deployedWhitelistContract.deployed();
    // ** We could also do smth like "await deployedWhitelistContract.deployTransaction.wait(1)"

    // print the address of the deployed contract
    console.log("Whitelist Contract Address:", deployedWhitelistContract.address);
    // deployed at 0x5C0fb7dB3fA5f562a382efB216df8883e92192B9

    // Things we need to deploy:
    // 1. Goerli network config (in hardhat.config.ts) ✅
    // 2. Access to the deployer account address (via ethers' getNamedAccounts())
    // const { deployer } = await getNamedAccounts()
    // 3. Access to our contract (via ethers' getContractAt)
    // 4. Deploy func
};

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
