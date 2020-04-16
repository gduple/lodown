'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Returns the given value unchanged.
 * 
 * @param {Value} value: Given value can be any data type.
 * 
 * @return {Value}: Returns the input value unaltered.
 * 
 */

function identity(value) {
    return value; 
}

module.exports.identity = identity; 


/**
 * typeOf: Defines the data type of any value.
 * 
 * @param {Value} value: Given value can be any data type.
 * 
 * @return {String}: Returns the data type of the given value as a string. 
 * 
 */ 
 
function typeOf(value) { 
    if (Array.isArray(value)) { 
        return 'array';         
    } else if (value === null) {    
        return 'null';              
    } else {                        
        return typeof value;    
    }
}

module.exports.typeOf = typeOf; 


/**
 * first: Returns a given number of values from the beginning of an array.
 * 
 * @param {Array} array: The array from which values will be returned. 
 * @param {Number} number: The number of positions to be returned from the array.
 * 
 * @return {Array}: Returns an array with <number> positions of input array,
 * starting at position 0. 
 * @return {Array}: Returns an empty array if array argument is not an array or
 * number argument is negative. 
 * @return {Array}: Returns an array containing only the first array value if 
 * argument number is undefined or NaN. 
 * 
 */

function first(array, number) { 
    if (!Array.isArray(array) || Math.sign(number) < 1) { 
        return []; 
    } else if (number === undefined || number === isNaN) {
        return array[0]; 
    } else { 
        return array.slice(0, number); 
        }                           
}

module.exports.first = first; 


/**
 * last: Returns a given number of values from the end of an array. 
 * 
 * @param {Array} array: The array from which values will be returned. 
 * @param {Number} number: The number of positions to be returned from the array.
 * 
 * @return {Array}: Returns an array with <number> positions of input array, 
 * starting at last position. 
 * @return {Array}: Returns an empty array if array argument is not an array or
 * number argument is negative. 
 * @return {Array}: Returns an array containing only the last array value if 
 * argument number is undefined or NaN. 
 * 
 */
 
function last(array, number) {
    if (!Array.isArray(array) || number < 0) { 
        return []; 
    } else if (number === undefined || number === isNaN) {
        return array[array.length - 1]; 
    } else if (number > array.length) {
        return array; 
    } else { 
        return array.slice(array.length - number, array.length); 
    }
}

module.exports.last = last;

 
/**
 * indexOf: Finds the first occurrence of a given value in a given array and 
 * returns its position within the array. 
 * 
 * @param {Array} array: The array from which values will be iterated and compared. 
 * @param {Value} value: The value to be found in the array. 
 * 
 * @return {Number}: Returns a number indicating the index of the given value in 
 * the given array.
 * @return {Number}: Returns -1 if value is not found in array.
 * 
 */
 
function indexOf(array, value) { 
    for (var i = 0; i < array.length; i++) { 
        if (array[i] === value) { 
            return i; 
        } else if (i === array.length - 1) { 
            return -1; 
        } 
    }
}

module.exports.indexOf = indexOf;


/**
 * contains: Determines whether a given array includes a given value.
 * 
 * @param {Array} array: The array from which values will be iterated and compared. 
 * @param {Value} value: The value to be found in the given array. 
 * 
 * @return {Boolean}: Returns true if given array contains given value. 
 * @return {Boolean}: Returns false if given array does not contain given value.
 * 
 */
 
function contains(array, value) {
    return array.includes(value) ? true : false; 
}

module.exports.contains = contains; 

 
/**
 * each: Loops over a collection (Array or Object) and applies the 
 * given Function to each value in the collection.
 *
 * @param {Array or Object} coll: The collection over which to iterate.
 * @param {Function} fn: The function to be applied to each value in the 
 * collection.
 * 
 */
 
function each(coll, fn) { //function takes collection and function
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) { 
            fn(coll[i], i, coll);
        }
    } else {
        for (var key in coll) {
            fn(coll[key], key, coll); 
        }
    }
};

module.exports.each = each;


/**
 * unique: Removes duplicates from a given array. 
 * 
 * @param {Array} array: The array from which duplicates will be removed.
 * 
 * @return {Array}: Returns an array with only unique values (no duplicates).
 * 
 */
 
function unique (array) { 
    let uniqueValues = [];
    for (let i = 0; i < array.length; i++) {
        if (i === indexOf(array, array[i])) {
            uniqueValues.push(array[i]); 
        }
    }
    return uniqueValues; 
}

module.exports.unique = unique; 


/**
 * filter: Passes values from a given array through a given function and returns
 * only those which resolve to boolean true. 
 * 
 * @param {Array} array: The array from which values will be passed to the given 
 * function.
 * @param {Function} fn: The function to which the given array values will be 
 * passed.
 * 
 * @return {Array}: Returns an array containing only values that resolve to true
 * when passed through the given function. 
 * 
 */

function filter(array, fn) { 
    let passedFn = [];  
        each(array, function(element, key, coll) {
            if (fn(element, key, array)) {
                passedFn.push(element); 
            }
        }); 
    return passedFn; 
}
 
module.exports.filter = filter; 
 
 
/**
 * reject: Passes values from a given array through a given function and returns
 * only those which resolve to boolean false.
 * 
 * @param {Array} array: The array from which values will be passed to the given
 * function.
 * @param {Function} fn: The function to which the given array values will be 
 * passed.
 * 
 * @return {Array}: Returns an array containing only values that resolve to false
 * when passed through the given function. 
 * 
 */
  
function reject(array, fn) { 
    let passedFn = filter(array, fn); 
    let failedFn = [];  
    for (var key in array) { 
        if (!passedFn.includes(array[key])) { 
            failedFn.push(array[key]); 
        }
    }
    return failedFn; 
}

module.exports.reject = reject; 


/**
 * partition: Passes values from a given array through a given function that 
 * resolves to boolean true or false. Returns an array with values sorted by 
 * boolean into two nested arrays. 
 * 
 * @param {Array} array: The array from which values will be passed to the given
 * function.
 * @param {Function} fn: The function to which the given array values will be 
 * passed.
 * 
 * @return {Array}: Returns an array with values that resolve to true in a      
 * nested array at position 0, and those that resolve to false in a nested array 
 * at position 1.
 * 
 */
 
function partition(array, fn) {
    let pass = [];  
    let fail = []; 
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i], i, array)) {
            pass.push(array[i]); 
        } else {
            fail.push(array[i]);
        }
    }
    return [pass, fail];
}
 
module.exports.partition = partition; 
 
 
/**
 * map: Passes values from a collection to a function and returns the a new 
 * array of the return values. 
 * 
 * @param {Array or Object} coll: The collection from which values will be 
 * passed to the given function. 
 * @param {Function} fn: The function to which the given collection values will 
 * be passed.
 * 
 * @return {Array}: Returns a new array containing the values of each function 
 * call as performed on each element of the given collection. 
 * 
 */
  
function map(coll, fn) {
    var resultArr = [];
    for (let key in coll) { 
        resultArr.push(fn(coll[key], key, coll));
    }
    return resultArr; 
}

module.exports.map = map; 


/**
 * pluck: Returns the values associated with a given object property from an 
 * array of objects. 
 * 
 * @param {Array} arrObs: The array of objects from which values will be returned.
 * @param {String} property: The property/key for which values will be returned.
 * 
 * @return {Array}: Returns an array containing the value of the given property
 * for every element in the given array of objects. 
 * 
 */
 
function pluck(arrObs, property) {
    return map(arrObs, function(element, key, coll) {
        return element[property]; 
    }); 
}

module.exports.pluck = pluck; 


/**
 * every: Returns true if every element of a given collection resolves to true 
 * when passed to a given function. 
 * 
 * @param {Array or Object} collection: The collection from which elements will
 * be passed to the given function.
 * @param {Function} fn: The function to which the given collection values will
 * be passed. 
 * 
 * @return {Boolean}: Returns true only if every element of the given collection
 * resolves to true when passed to the given function. 
 * @return {Boolean}: Returns false if one or more elements of the given 
 * collection returns false when passed to the given function. 
 * @return {Boolean}: If no function is provided, returns true if every 
 * element of the given collection is truthy. 
 * 
 */
  
function every(coll, fn) {
    let result = true; 
    if (fn) {                             
        each(coll, function(element, key, coll) {
            if (!fn(element, key, coll)) {  
                result = false;             
                return result;              
            } 
        });
    } else if (fn === undefined) {          
        each(coll, function(element, key, coll) { 
            if (!element) {           
                result = false;          
                return result;            
            }
        });
    }
    return result; //return default true (only gives true if never killed early)
}

module.exports.every = every; 


/**
 * some: Returns true if one or more elements of a given collection resolves to 
 * true when passed to a given function. 
 * 
 * @param {Array or Object} collection: The collection from which elements will
 * be passed to the given function.
 * @param {Function} fn: The function to which the given collection values will
 * be passed. 
 * 
 * @return {Boolean}: Returns true if at least one element of the given 
 * collection resolves to true when passed to the given function. 
 * @return {Boolean}: Returns false only if every element of the given collection 
 * returns false when passed to the given function. 
 * @return {Boolean}: If no function is provided, returns true if at least one 
 * element of the given collection is truthy. 
 * 
 */
  
function some(coll, fn) {
    let result = false; 
    if (fn) {                             
        each(coll, function(element, key, coll) {
            if (fn(element, key, coll)) {  
                result = true;       
                return result;          
            } 
        });
    } else if (fn === undefined) {       
        each(coll, function(element, key, coll) { 
            if (element) {               
                result = true;         
                return result;         
            }
        });
    }
    return result; 
}

module.exports.some = some; 


/**
 * reduce: Calls a given function for every element of a given array in sequence, 
 * using the previous result as the input for the next function call, and 
 * and returning the result of the final function call. 
 * 
 * @param {Array or Object} coll: The collection from which values will be passed
 * to the given function.
 * @param {Function} fn: The function to which the given collection values will
 * be passed. 
 * @param {Value} seed: The first value to be passed to the function (used in 
 * place of the previous result on the first iteration). 
 * 
 * @return {Value}: Returns the value of the final call of the given function. 
 * 
 */
  
function reduce(array, fn, seed) { 
    each(array, function(element, i, collection) {
        if (seed === undefined) {   
            seed = array[i]; 
        } else if (seed) {  
            seed = fn(seed, element, i); 
        }
    });
    return seed; 
}

module.exports.reduce = reduce; 


/**
 * extend: Copies properties from one or more given objects to another given 
 * object.
 * 
 * @param {Object} obj: The object to which the subsequent given object's 
 * properties will be copied. 
 * @param {Object(s)} objs: One or more objects from which properties will be 
 * copied to the initial given object. 
 * 
 * @return {Object}: Returns the initial given object with properties copied from
 * all additional given objects. 
 * 
 */
  
function extend(obj, ...objs) {
	each (objs, function(objs, key, coll) {
    	for (let key in objs) {
        	obj[key] = objs[key];
    	}
	});
	return obj;
}

module.exports.extend = extend; 