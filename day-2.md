## Learn Solidity

### Define a string called value

``` 
contract MyContract{
    string value;     
}
```
Where the `string value` is stored on block chain it self. 

### Declareing a read function 

```
function get() public view returns(string){
    return value;
}
```
Here we are defined a function named `get` to return the string stored in `value` also we declared `public` modifier used to set the visibility of the function to be Public. And it returns a `String` Datatype from the function.
`view` Modifier used to make the function immutable.

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


