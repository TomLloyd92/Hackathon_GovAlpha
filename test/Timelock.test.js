//Contract ABIs needed
const ganache = require('ganache-cli');
const Timelock = artifacts.require("Timelock");
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

//Chai
const assert = require('chai').assert;

let timelock 

contract("TimeLock", accounts =>{
    const owners = [accounts[0], accounts[1], accounts[2]]

    beforeEach( async () => {
        timelock = await Timelock.new(owners[0], 61);
    })

    it("Change Admin", async () =>{
        console.log(timelock.address);
        assert.isTrue(true);
    })
})




// beforeEach(async () => {
//     accounts = await web3.eth.getAccounts();
// })

// contract("TimeLock", accounts => {
//   it("Init TimeLock Deploy", () =>

//     console.log(accounts),
//     );
// })