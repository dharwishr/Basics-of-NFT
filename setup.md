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