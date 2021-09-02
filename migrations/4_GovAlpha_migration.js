const Timelock = artifacts.require("Timelock");
const TomToken = artifacts.require("TomToken");
const GovernorAlpha = artifacts.require("GovernorAlpha");
const ownerAddress = '0x0F2Bb42321D8eC46526b620DCC346D019b281c4b';
const daysDelay = 61; //seconds

module.exports = async function (deployer) {
    //Tom Token
    await deployer.deploy(TomToken, ownerAddress);
    const tomToken = await TomToken.deployed();
    const tomTokenAddress = tomToken.address;


    //Timelock
    await deployer.deploy(Timelock, ownerAddress, daysDelay);
    const timelock = await Timelock.deployed();
    const timelockAddress = timelock.address;

    //Gov Alpha
    await deployer.deploy(GovernorAlpha, timelockAddress, tomTokenAddress, ownerAddress);
    const governorAlpha = await GovernorAlpha.deployed();
    const governorAlphaAddress = governorAlpha.address;


    //console.log("THE FOLLOWING ADDRESSES HAVE BEEN DEPLOYED:")
    //console.log(`The Time lock Address is: ${timelockAddress}`);
    //console.log(`The Tom Token Address is: ${tomTokenAddress}`);
    //console.log(`The Gov Alpha Address is: ${governorAlphaAddress}`);
};



