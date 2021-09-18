## Make contract ownable
- Its like setting a contract to specific owner only
- [OpenZeppelin](https://openzeppelin.com/contracts/)'s ownable smart contract

### Indexing events 
* The indexed parameters for logged events will allow you to search for these events using the indexed parameters as filters.
* The indexed keyword is only relevant to logged events
```'
// Search specif items instead getting all the logs
  event <Identifier>(<parameters>)
```