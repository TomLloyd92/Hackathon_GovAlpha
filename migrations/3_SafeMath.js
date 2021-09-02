const Safemath = artifacts.require("Safemath");

module.exports = async function (deployer) {
    await deployer.deploy(Safemath);
    const safeMath = await Safemath.deployed();
    const safeMathAddress = safeMath.address;
    console.log(`The Time lock Address is: ${safeMathAddress}`);
};