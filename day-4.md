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

## Gas - fuel for ethereum to run smart contracts
### How to reduce gas fee 
- Cluster the datatypes together 
- `view` functions don't cost any gas when they're called externally by a user


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
