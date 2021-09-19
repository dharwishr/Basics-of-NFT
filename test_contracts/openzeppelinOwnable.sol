pragma solidity >=0.5.0;
contract Ownable{
    address private _owner;
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );
    constructor() internal{
        _owner = msg.sender;
        emit OwnershipTransferred(address(0), _owner);
    }
    function owner() public view returns(address){
        return _owner;
    }
    modifier onlyOwner(){
        require(isOwner());
        _;
    }
    function renounceOwnership() public onlyOwner{
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
    }
    function transferOwnership(address newOwner) public onlyOwner{
        _transferOwnership(newOwner);
    }

}