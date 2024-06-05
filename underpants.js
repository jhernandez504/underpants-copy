// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
 _.identity = function(value){
    //returns value unchanged
    return value;
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    //if statement to determine what type of data value is
    //if type is of string
    if (typeof (value) === 'string'){
        return 'string';
        //if type of is function
    } else if (typeof value === 'function'){
        return 'function';
    } //if value is an array : return "array" 
      else if(Array.isArray(value)) {
        return 'array';
        //if value is typeof object AND not an instance of date AND not null
    } else if(typeof (value) === 'object' && !(value instanceof Date) && value !== null){
        return 'object';
        //if value is null
    } else if(value === null){
        return 'null';
        //if value is = to boolean
    } else if(typeof (value) === 'boolean'){
        return 'boolean'

    }   //if value is undefined
      else if(typeof (value) === 'undefined'){
        return 'undefined';
        //if value is type of string
    } else if(typeof (value) === 'number'){
        return 'number';
    }
    
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number){
    //if condition to check if array is not an array
    if (!(Array.isArray(array))){
        return [];

    }
    //checks if number is not given or not a number
    else if(typeof number !== 'number' || number === undefined) {
        return array[0];
      //checks if number is negative
    } else if(number < 0) {
        //return empty array if number is neg
        return [];
    }
    else{
        //returns array from index 0 to index (number) if passed thru all conditions
        return array.slice(0, number);
    }
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number) {
    //returns empty array if array param isn't an array
    if (!(Array.isArray(array))){
        return [];
    } else if(typeof number !== 'number' || number === undefined){
        //returns last element in array
        return array[array.length - 1];
      //else if to check if number is neg
    } else if(number < 0){
        //returns empty arr
        return [];
    } else{
        //returns makes sure number is !> array length using Math.max and 
        // that array from number to atleast 0 is returned 
        return array.slice(Math.max((array.length - number), 0));
    }
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){
    //for loop to iterate thru array
    for (let i = 0; i < array.length; i++) {
        //if condition to check if value is in array
        if(array[i] === value) {
            //returns index
            return i;
        }
        
    }
    //return -1 if value isnt in array
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value) {
    //return false if value is undefined if false runs function 
    return value === undefined ? false : (function(){
        //loop to iterate thru array
        for (let i = 0; i < array.length; i++){
            //if condition if value is in array index, if not increment index
            if( array[i] === value){
                return true;
            }
        }
        //returns false by default
        return false;
        
    })(); 
  
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, func){
    //if conditional to test if collection is array
    if(Array.isArray(collection)){
        //loop thru array
        for(let i = 0; i < collection.length; i++){
            // call func to to test element, index, array
            if(func(collection[i], i, collection)){
                console.log(collection[i]);
            }
        }
    } else{
        //for in loop thru obj
        for(let key in collection){
            //if conditional calling func to test value, key and obj
            if(func(collection[key], key, collection)){
                //logs every key and value
                console.log(collection[key]);
            }
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
    //create empty array to hold elements of given array with duplicates removed
    let filteredArray = [];
    //for loop to iterate array calling func to test if each index is === -1 
    array.forEach(function(value) {
        if (filteredArray.indexOf(value) === -1) {
          //push value to filteredArray
          filteredArray.push(value);
        }
    
    });
    //return filteredArray
    return filteredArray;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func){
    //create new tempArray
    let output = [];
    //for loop to iterate over array
    for (let i = 0; i < array.length; i++){
      //if conditional to call func that test at index if it returns data that is truthy
      if(func(array[i], i, array) === true){
        output.push(array[i]);
      }
    }
    return output;   
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func){
     //create new tempArray
     let output = [];
     //for loop to iterate over array
     for (let i = 0; i < array.length; i++){
       //if conditional to call func that test at index if it returns data that is truthy
       if(func(array[i], i, array) === false){
         output.push(array[i]);
       }
     }
     return output;
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func){
    //declare and initialize empty arrays to hold falsy, truthy and combined values
    let falsyArray = [];
    let truthyArray = [];
    let joinedArray = [];
    //loop thru array
    for(let i = 0; i < array.length; i++){
        //if conditional to call func to test element, key, array if true
        if(func(array[i], i, array) === true) {
            //pushes value at array[i] to truthyArray if true
            truthyArray.push(array[i]);
        } else {
            //if false, pushes value at array[i] to falsyArray
            falsyArray.push(array[i]);
        }
    }
    //assigns index 0 to truthyarray and 1 to falsy
    joinedArray[0] = truthyArray;
    joinedArray[1] = falsyArray;
    //returns joinedArray
    return joinedArray;
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
    //create output array
    let output = [];
    //determine if input collection is an array
    if(Array.isArray(collection)){
        //iterate over collection
        for (let i = 0; i < collection.length; i++){
            //push result of invoking function on the element, index, and collection
            output.push(func(collection[i], i, collection));
        }
    } else{//else its an object
        //iterate over collection
        for (let key in collection){
        output.push(func(collection[key], key, collection));
        //invoke function on the value, key and collection
        
        //take the return value of the function call and push into array
        }
    }
        
    //return output array
    return output;
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function (array, property) {
    //returns the result of invoking _.map function using using 
    //arguments array, and function that takes in object 
    //which is a function that returns the objects prop value
    return _.map(array, function(object){
        //returns objects property value
        return object[property];
    });
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = (collection, func) => {
   //if there is no function, check if return value is truthy
   if(func = func || function(value){
    return value;
   })
        //check if collection is array
        if(Array.isArray(collection)){
            //for loop thru array
            for(let i = 0; i < collection.length; i++){
                //returns false if func(collection[i], i, collection) = false
                if(!func(collection[i], i, collection)){
                    return false;
                }
            }
        }
    
        //else statement
        //assumes collection = object
        else{

        //for in loop for every key in obj
            for(let key in collection){
            //returns true if func(collection[key], key, collection) = true
                if(!func(collection[key], key, collection)){
                    //if false returns false
                    return false;
                }
                
            }
        }
        return true;
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = (collection, func) => {
    
    //return true atleast 1 value is truthy
    if(func = func || function(value) {
        return value;
        
    })

    //check if collection is array
    if(Array.isArray(collection)){
        //loop thru array
        for(let i = 0; i < collection.length; i++){
            //test func using argu collection[i], index, collection
            if(func(collection[i], i , collection)){
                //returns true once 1 condition is met
               return true; 
            }
            
        }
    }   //assumes if not array, its object
    else{
        //for in loop to iterate object
        for(let key in collection){
            //if condition to test func(collection[key], key, collection)
            if(func(collection[key], key, collection)){
                //returns true if 1 true
                return true;
            }
        }
    }
    //returns false if passes thru loops without true being returned
    return false;
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
    let result;
    //if condition to test if seed is provided
    if(seed === undefined){
        result = array[0];
        //loop thru array
        for(let i = 1; i < array.length; i++){
            //reassigning result of invoking callback func of current result + current value @ index
            result = func(result, array[i], i);
        }
    } else{
        // initialize result as seed input
        result = seed;
        //for loop to iterate array starting at 0
        for(let i = 0; i < array.length; i++){
            //reassigning result to result of invoking callback func
            result = func(result, array[i], i);
        }

    }
    //return final result
    return result;
}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}