const { expect } = require('chai');
describe('Token contract', () => {
    let Token, token, owner, addr1, addr2;

    beforeEach(async () => {
        Token = await ethers.getContractFactory('Token');
        token = await Token.deploy();
        [owner, addr1, addr2, _] = await ethers.getSigners();
    });
    describe('Deployment', () => {
        it('Should set the right owner', async () => {
            expect(await token.owner()).to.equal(owner.address);
        });
        it('Should assign the total supply of tokens to owner', async () => {
            const ownerBalance = await token.balanceOf(owner.address);
            expect(await token.totalSupply()).to.equal(ownerBalance);
        });
    });
    describe('Transactions', ()=>{
        it('Should transfer tokens between accounts', async () => {
            await token.transfer(addr1.address, 50);
            const addr1Balance = await token.balanceOf(addr1.address);
            expect(addr1Balance).to.equal(50);

            await token.connect(addr1).transfer(addr2.address, 50);
            const addr2Balance = await token.balanceOf(addr2.address);
            expect(addr2Balance).to.equal(50);
        });
        it('Should fail if sender dosent enough have token', async () => {
            const initialOwnerBalance = await token.balanceOf(owner.address);
            await expect(
                token.connect(addr1).transfer(owner.address, 1)
            ).to.be.revertedWith('Not enough token');
            expect(
                await token.balanceOf(owner.address)).to.equal(initialOwnerBalance);
        });
        it('Should update balances after transfer', async ()=>{
            const initialOwnerBalance = await token.balanceOf(owner.address);
            await token.transfer(addr1.address, 10000);
            await token.transfer(addr2.address, 5000);
            const finalOwnerBalance = await token.balanceOf(owner.address);
            expect (finalOwnerBalance).to.equal(initialOwnerBalance - 15000);
            const addr1Balance = await token.balanceOf(addr1.address);
            expect(addr1Balance).to.equal(10000);
            const addr2Balance = await token.balanceOf(addr2.address);
            expect(addr2Balance).to.equal(5000);
        });
    });
});