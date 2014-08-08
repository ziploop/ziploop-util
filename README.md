ziploop-util
============

*Utility functions created by the Ziploop engineering team*

## throttleForEach

*A throttled forEach function, allowing the user to specify how quickly to iterate over an array. It was created to help with API requests where a fixed number of items need to be called at a fixed rate to avoid exceeding limits, without the complexity of a pool of requests that grows and shrinks over time, or where thinking about limits in terms of workers is not helpful.

**Arguments**: throttleForEach(array, waitTime, iterator)

*The array is passed to the function so it can work with array-like objects (like Mongo cursors) without extending the Array prototype. Wait times are given in milliseconds. The iterator is passed two arguments: an array item and its index.

#### Example

```
var array = ["Jake", "Paul", "Autumn", "Brendon", "John Boy"];
throttleForEach(array, 1000, function(name, i){
	console.log(name + " is at index " + i);
});
```

## validParams

*Checks an object against an array of valid/allowed properties, with an optional 'strict mode' to eliminate unallowed properties from the object. It was created to check req.body or req.query in Node/Express for a route's required parameters.

**Arguments**: validParams(objectToCheck, arrayOfParameters, strictMode)

*The arrayOfParameters should contain strings of allowed property names. The strictMode boolean specifies whether to return all properties (false) or only those matching properties in the arrayOfParameters list (true).

#### Example

```
var testObj = {
	'one': 1,
	'two': 2,
	'three': 3
}
validParams(testObj, ['one', 'two'], false) // returns {one: 1, two: 2, three: 3}
validParams(testObj, ['one', 'two'], true) // returns {one: 1, two: 2}
validParams(testObj, ['one', 'two', 'cow'], false) // returns false
validParams(testObj, ['one', 'two', 'cow'], true) // returns false
validParams(testObj, ['one', 'two']) // returns {one: 1, two: 2, three: 3}
```