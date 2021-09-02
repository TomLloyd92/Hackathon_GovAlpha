const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

//Contract Artifacts
const Timelock = artifacts.require("Timelock");
const TomToken = artifacts.require("TomToken");
const GovernorAlpha = artifacts.require("GovernorAlpha");

//Chai
const assert = require('chai').assert;

let timelock;
let tomToken;
let alphaGov;

contract("TimeLock", accounts =>{
    const owners = [accounts[0], accounts[1], accounts[2]]

    beforeEach( async () => {
        timelock = await Timelock.new(owners[0], 61);
        tomToken = await TomToken.new(owners[0]);
        alphaGov = await GovernorAlpha.new(timelock.address, tomToken.address, owners[0]);
        //govAlpha = await 
    })

    it("Change Admin", async () =>{


        console.log(alphaGov.address);
    })
})