const ErrorDecoder = artifacts.require("ErrorDecoder");

module.exports = async function (deployer) {
    await deployer.deploy(ErrorDecoder);
    const errorDecoder = await ErrorDecoder.deployed();

    const errorDecoderAddress = errorDecoder.address;
    console.log(`The Error Decoder Address is: ${errorDecoderAddress}`);
};

