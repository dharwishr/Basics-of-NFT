## Mapping and address
Just like mapping

```
mapping(address => uint) public myMap;
function get(address _addr) public view returns (uint){
    return myMap[_addr]; 
}
function set(address _addr, uint _i) public{
    myMap[_addr]=_i;
}
function delete(address _addr) public{
    delete myMap[_addr];
}
```
### msg.sender

one of the global variable, it refers to the address of the person (or smart contract) who called the current function.

```
mapping(address => uint) public favNumber;
function setNumber(uint _myNumber) public {
    favNumber[msg.sender] = _myNumber;
}
function displayNumber() private view return(uint){
    return favNumber[msg.sender];
}

```

### require
it makes so that it will throw an error if the conditon not true

```
function createRandomZombie(string memory _name) public {
    require(ownerZombieCount[msg.sender] == 0); // It will work only if this true else throws an error

    uint randDna = _generateRandomDna(_name);
    _createZombie(_name, randDna);
}
```

### Inheritance
```
contract setValue{
// Some code
}
contract setAnotherValue is setValue{
// Some another code
}
```
like sub class `setAnotherValue` will extend `setValue` so that `setAnotherValue` will have all the functions and from `setValue` and also functions form `setAnotherValue` too.

### Import
```
import "./anotherSolidityFile.sol";
contract 
```
Import libs and another solidity files

### How things var are stored in solidity
* Storage :
    - Stored permanrtly inside blockchain
    - Expensive (blockchain storage is expensive)
* Memory :
    - Temporary storage just like RAM
    - Are erased between your external function calls to your contract
```
contract sandwichFactory {
    struct Sandwich{
        string name;
        string status;
    }
    Sandwich [] sandwiches;
    function eatSadwich(uint _index) public {
        Sandwich storage mySandwich = sandwiches[_index]
        mySandwich.status = "Eaten"
        // mySandwich is defined as storage so that any changed to that will change storage which equls to blockchain
        Sandwich memory anotherSandwich = sandwiches[_index+1]
        anotherSandwich.status = "Not Eaten"
        // Here we are using memory fir anotherSandwich so that it stored temproray variable
        sandwiches[_index + 1] = anotherSandwich;
        // Now its stored inside storage


    }
}
```

