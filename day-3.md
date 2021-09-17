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
## Visibility
* Internal : Same as private expect that its also accessible to contracts that inherits from this contracts.
* External : similar to public, expect that these functions can ONLY be called outside th contract. They acnt be called by other functions inside the same contract.
## Define an interface
```
contract NumberInterface {
  function getNum(address _myAddress) public view returns (uint);
};

```
Defined a interface named as `NumberInterface` 
```
contract MyContract{
    address NumberInterfaceAddress = 0xab8459 ...... // Some address of contract on ethereum
    NumberInterface numberContract = NumberInterface(NumberInterfaceAddress); //
    function someFunction() public{
        // Calling getNum from that contract 
        uint num = numberContract.getNum(msg.sender);
        // and use the num here
    }
}
```
Here we defined another contract and inside that we assigned the interface contract to `numberContract` and used inside a function which we defined in the new contract

In `Solidity` we can return more than one value
```
function multipleReturns() returns(uint a, uint b, uint c){
    return (1, 2, 3);
}

function processMultipleReturn() external{
    uint a;
    uint b;
    uint c;
    // Multiple assignment
    (a, b, c) = multipleReturns();
}

function onlyOneReturnCall() external{
    uint c;
    (,,c) = multipleReturns();
}

```
