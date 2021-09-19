## Install Node.js
## Install Hardhat
```
mkdir hardhat-tutorial
cd hardhat-tutorial
npm init --yes
npm install --save-dev hardhat
```
```
npx hardhat
```
Select `Create an empty hardhat.config.js` with your keyboard and hit enter.
## Basic commands
```
# To compile tasks
npx hardhat compile
# To see currently available tasks in your project
npx hardhat
```
## Install Ether.js Waffle
```
npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```
Added `require("@nomiclabs/hardhat-waffle");` to hardhat.config.js top line

## Creating a smart contract

Create a small smart contract `Token.sol` inside contracts folder (create if you dont have one). 

to compile `npx hardhat compile`

## Testing contracts

* Writing automated contacts tests

Create an directory called test and a file called Token.js

```
const { expect } = require("chai");

const { ethers } = require("hardhat");

// Describe is a function in the Jasmine testing framework. It simply describes the suite of test cases enumerated by the "it" functions.
// Also used in the mochajs framework.

describe("Token contract", function(){
    it("Deployment should assign the total supply of tokens to the owner", async function(){
        const [owner] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("Token");
        const hardhatToken = await Token.deploy();
        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    })
});
```
* `Signer` is an object that represents an Ethereum account. Used to send transaction. [Learn More](https://docs.ethers.io/v5/api/signer/)
* `ether`defined to for global scope
* `ContractFactory` in ethers.js is an abstraction used to deploy new smart contract `Token` is an instance
* `deploy()` will start deployment and return a promise that resolves to a contract. 

## Debugging in Hardhat 
* Import `hardhat/console.sol` to smart contract
```
 function transfer(address to, uint amount) external {
        console.log('Sender balance is %s tokens', balances[msg.sender]);
        console.log('Trying to send %s token to %s', amount, to);
        require(balances[msg.sender] >= amount, "Not enough tokens");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }
```
### Result
```
 Token contract
    Deployment
      ✓ Should set the right owner
      ✓ Should assign the total supply of tokens to owner
    Transactions
Sender balance is 1000000 tokens
Trying to send 50 token to 0x70997970c51812dc3a010c7d01b50e0d17dc79c8
Sender balance is 50 tokens
Trying to send 50 token to 0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc
      ✓ Should transfer tokens between accounts (70ms)
Sender balance is 0 tokens
Trying to send 1 token to 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
      ✓ Should fail if sender dosent enough have token (115ms)
Sender balance is 1000000 tokens
Trying to send 100 token to 0x70997970c51812dc3a010c7d01b50e0d17dc79c8
Sender balance is 999900 tokens
Trying to send 50 token to 0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc
      ✓ Should update balances after transfer (61ms)


  5 passing (1s)
```