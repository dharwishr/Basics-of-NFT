## Learn Solidity
### [Learn JavaScript then learn Solidity, change my mind!](https://academy.bigbinary.com/learn-javascript) 
## Define Solidity Version
Source code should start with a `version pragma` to declare the version of solidity compiler this code should use,
```
pragma solidity >=0.5.0 <0.9.0
```
## How to Comment on Solidity ?
```
//this is a single line comment

/*

The is a 
Multiline comment

*/
```
## What is contract?

A contract is the fundamental building block of Ethereum applications 
## Define a contract

``` 
contract MyContract{
    /* Content */     
}
Ex:
contract MyContract{
    string value;
}
```

## Datatype : State Variable and Integers 
State variables are permanently stored inside contract storage. So that its written to the Ethereum Blockchain it self.

Example:
```
contract HelloWorld{
    uint myUnsignedInteger = 100;
}
```
Here we are using Unsigned Integer `uint` which is a datatype that must be a non negative value.  `int` used for datatype for signed integers.

## Math Operations
Straightforward and similar to other languages.

* Addition: `x + y` 
* Subtraction: `x - y`
* Multiplication: `x * y`
* Division: `x / y`
* Modulus: `x % y`
Example
```
contract MathOperations{
    uint x = 10 + 2; //Addition
    uint x = 10 - 2; //Subtraction
    uint x = 10 * 2; //Multiplication
    uint x = 10 / 2; //Division
    uint x = 10 % 2; //Modulus
}
```
## Datatype : String
Datatype to store arbitrary-length of UTF-8 data.

Example
```
string greeting = "Hello World"
```
## Structs
Structs are custom defined types that can group several variables

Example:
```
struct Person{
    uint age;
    string name;
    unit phoneNumber;
}
```
## Arrays
Collection of something. Two types of array in solidity : `fixed` and `dynamic` arrays.
```
uint[3] fixedArray;

string[5] fixedStringArray;

uint[] dynamicArray;

string[] dynamicStringArray;
```
### Public Arrays 
Public array. Other contracts can read from it, but not to write.
```
Person[] public people;
```

### Function declarations

```
function testFunction)(string memory _name, uint _amount) public{
}
```



* Its takes  parameter, a `string` and a `uint`
* Specifying visibility of function to other contracts we use `public`
    * Default visibility will be `public`, you can also use `private` to make its scope to specific contract but you have to follow one naming convention rule that `private` functions name should start with  "_" (underscore)
    
    Example 
    ```
    function _privateFunction(string memory _name, uint _number) private{

    }
    ```
* `memory` attribute used to specify use temporary storage. [Here is why](https://docs.soliditylang.org/en/v0.4.24/frequently-asked-questions.html#what-is-the-memory-keyword-what-does-it-do)

## Playing with structs
```
struct Person{
    uint age;
    string name;
}

// define a array named people 

Person[] public people;

// created a person and assigned to satoshi

Person satoshi = Person(172,"Satoshi");

// Push the satoshi to people array

people.push(satoshi);
```
## Declareing a read function 

```
string greeting = "Hello World";

function sayHello() public returns (string memory) {
  return greeting;
}

```
Here we are defined a function named `sayHello()` to return the string stored in `value` also we declared `public` modifier used to set the visibility of the function to be Public. And it returns a `String` Datatype from the function.

* Use `view` modifier to make function immutable / non modifiable 
    ```
    function sayHello() public view returns (string memory) {
    ```

### Keccak256
Its an hash function, version of SHA3. It maps an input into random hexadecimal 256bit number
* `keccak256` it expects single parameter of type `bytes`
* Not secure enough for production level 

Example
```
keccak256(abi.encodePacked("aaaab"))
```
### Typecasting
Convert between datatype
```
uint a = 5
unit8 b = 10

uint8 c = uint8(a) + b
```

## Events

___


```
contract MyContract {
    string value;

    function get() public view returns (string memory) {
        return value;
    }

    function set(string memory _value) public {
        value = _value;
    }

    constructor() public {
        value = "myValue";
    }
}
```


