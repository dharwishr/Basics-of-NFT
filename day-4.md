## Make contract ownable
- Its like setting a contract to specific owner only
- [OpenZeppelin](https://openzeppelin.com/contracts/)'s ownable smart contract

### Indexing events 
* The indexed parameters for logged events will allow you to search for these events using the indexed parameters as filters.
* The indexed keyword is only relevant to logged events
```'
// Search specific items instead getting all the logs
  event <Identifier>(<parameters>)
```
### Function modifiers
* its function but uses keyword modifier instead function
* it cant called like regular function, but we can attach it to some function declaration end and chnage that functional behavior.

```
modifier onlyOwner() {
    require(isOwner());
    _;
}
function renounceOwnership() public onlyOwner {
    emit OwnershipTransferred(_owner, address(0));
    _owner = address(0);
}
/// it can also take arguments
modifier olderThan(uint _age, uint _userId) {
  require(age[_userId] >= _age);
  _;
}
function driveCar(uint _userId) public olderThan(16, _userId) {
  // Some function logic
}
```
* so in this example, while we call `renounceOwnership` first it will compile the `onlyOwner` then after `_;` it will compile contents of main function.
### Multiple modifiers stacked together
```
function test() external view onlyOwner anotherModifier{

}
```
## Payable modifier
- Special type of function that can receive ether

In Ethereum, because both the money (Ether), the data (transaction payload), and the contract code itself all live on Ethereum, it's possible for you to call a function and pay money to the contract at the same time.

- Use payable modifier to get some transaction done under some functions.


### How to pay
```
contract OnlineStore {
  function buySomething() external payable {
    // Check to make sure 0.001 ether was sent to the function call:
    require(msg.value == 0.001 ether);
    // If so, some logic to transfer the digital item to the caller of the function:
    transferThing(msg.sender);
  }
}
```
If we send ether to a contract, it gets stored inside contract's specific ethereum account and we can only withdraw it by creating a withdraw function.
### How to withdraw
```
contract GetPaid is Ownable {
  function withdraw() external onlyOwner {
    address payable _owner = address(uint160(owner()));
    _owner.transfer(address(this).balance);
  }
}
// Managing customers who overpaid
uint itemFee = 0.001 ether;
msg.sender.transfer(msg.value - itemFee);

``` 

## Gas - fuel for ethereum to run smart contracts
### How to reduce gas fee 
- Cluster the datatypes together 
- `view` functions don't cost any gas when they're called externally by a user
- Storage is expensive, if we are not using memory attribute for storage type, its gonna be stored inside the blockchain its self which is not irreversable so.
### Declaring an array in memory
```
function getArray() external pure returns(uint[] memory){
    uint[] memory values = new uint[](3);
    values[0] = 1;
    values[1] = 2;
    values[2] = 3;
    return values;
}
```

```
struct NormalStruct{
    uint32 a;
    uint b;
    unit32 c;
}// Not clusterd simialr datatypes
struct MinimalStruct{
    uint32 a;
    uint32 b;
    uint c;
}// clusted similar datatypes
```
- `view` functions don't cost any gas when they're called externally by a user.


## Time units
* use `now` tag to define time.
```
function updateTimestamp() public {
  lastUpdated = now;
}
1 days, 5 minutes, 1 months, 2 years // time defining 
```

### Passing structs as arguments
```
function _doStuff(Zombie storage _zombie) internal {
    // _zombie is the refference to Zombie struct
}
```
## For loops
```
for (uint i=1; i <= 10; i++){
    if (i%2 == 0){
        // operation;
        counter ++;
    }
}
```

### Generate random Number (Not safe for production | demo)
```
uint randNonce = 0;
uint random = uint(keccak256(abi.encodePacked(now, msg.sender, randNonce))) % 100;
randNonce++;
```
To get unique random number we use msg.sender and timestamp create into random hash and get the last 2 digit by mod of 100
### Essentials

(copied)

- We have visibility modifiers that control when and where the function can be called from: `private` means it's only callable from other functions inside the contract; `internal` is like `private` but can also be called by contracts that inherit from this one; `external` can only be called outside the contract; and finally `public` can be called anywhere, both internally and externally.

- We also have state modifiers, which tell us how the function interacts with the BlockChain: `view` tells us that by running the function, no data will be saved/changed. `pure` tells us that not only does the function not save any data to the blockchain, but it also doesn't read any data from the blockchain. Both of these don't cost any gas to call if they're called externally from outside the contract (but they do cost gas if called internally by another function).



