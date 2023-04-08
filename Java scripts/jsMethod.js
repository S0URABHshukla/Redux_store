// Array method
const myArray = [1, 2, 3, 4, 5];
myArray.push(6); // adds 6 to the end of the array
console.log(myArray); // output: [1, 2, 3, 4, 5, 6]

const lastElement = myArray.pop(); // removes the last element (6) and returns it
console.log(lastElement); // output: 6
console.log(myArray); // output: [1, 2, 3, 4, 5]

const firstElement = myArray.shift(); // removes the first element (1) and returns it
console.log(firstElement); // output: 1
console.log(myArray); // output: [2, 3, 4, 5]

const newLength = myArray.unshift(0, 1); // adds 0 and 1 to the beginning of the array and returns the new length (6)
console.log(newLength); // output: 6
console.log(myArray); // output: [0, 1, 2, 3, 4, 5]

const newArray = myArray.slice(1, 4); // returns a new array containing the elements from index 1 (inclusive) to index 4 (exclusive)
console.log(newArray); // output: [1, 2, 3]

myArray.splice(2, 0, "a", "b"); // inserts "a" and "b" at index 2 and removes 0 elements
console.log(myArray); // output: [0, 1, "a", "b", 2, 3, 4, 5]

const concatenatedArray = myArray.concat([6, 7, 8]); // returns a new array that is the result of concatenating myArray and [6, 7, 8]
console.log(concatenatedArray); // output: [0, 1, "a", "b", 2, 3, 4, 5, 6, 7, 8]

const joinedString = myArray.join(", "); // returns a string containing all the elements of myArray separated by a comma and a space
console.log(joinedString); // output: "0, 1, a, b, 2, 3, 4, 5"

//------------------------------------------------------------------------------------------------------------------------------------

//String method
// Concatenation methods
const str1 = "Hello";
const str2 = "world";
console.log(str1.concat(" ", str2)); // Output: "Hello world"
console.log(str1 + " " + str2); // Output: "Hello world"
// Substring methods
const myString = "Hello world";
console.log(myString.slice(1, 4)); // Output: "ell"
console.log(myString.substring(1, 4)); // Output: "ell"
console.log(myString.substr(1, 4)); // Output: "ello"
// Case methods
console.log(myString.toLocaleLowerCase()); // Output: "hello world"
console.log(myString.toLocaleUpperCase()); // Output: "HELLO WORLD"
console.log(myString.toLowerCase()); // Output: "hello world"
console.log(myString.toUpperCase()); // Output: "HELLO WORLD"
// Inspection methods
console.log(myString.charAt(0)); // Output: "H"
console.log(myString.charCodeAt(0)); // Output: 72
console.log(myString.endsWith("world")); // Output: true
console.log(myString.includes("world")); // Output: true
console.log(myString.indexOf("world")); // Output: 6
console.log(myString.lastIndexOf("o")); // Output: 7
console.log(myString.startsWith("Hello")); // Output: true
// Padding methods
console.log(myString.padEnd(15, ".")); // Output: "Hello world...."
console.log(myString.padStart(15, ".")); // Output: "....Hello world"
// Whitespace trimming methods
const myStringWithWhitespace = "   Hello world   ";
console.log(myStringWithWhitespace.trim()); // Output: "Hello world"
console.log(myStringWithWhitespace.trimEnd()); // Output: "   Hello world"
console.log(myStringWithWhitespace.trimStart()); // Output: "Hello world   "
// Other methods
console.log(myString.split(" ")); // Output: ["Hello", "world"]
console.log(myString.replace("world", "JavaScript")); // Output: "Hello JavaScript"
console.log(myString.match("world")); // Output: ["world", index: 6, input: "Hello world"]
console.log(myString.search("world")); // Output: 6
console.log(myString.concat("!")); // output: "hello world!"
console.log(myString.localeCompare("HELLO WORLD")); // output: 1 (since "hello world" comes after "HELLO WORLD" in alphabetical order)
console.log(myString.repeat(3)); // output: "hello worldhello worldhello world"

//------------------------------------------------------------------------------------------------------------------------------------

//Math method
console.log(Math.abs(-5)); // output: 5
console.log(Math.ceil(2.4)); // output: 3
console.log(Math.floor(2.4)); // output: 2
console.log(Math.max(2, 4, 6, 8)); // output: 8
console.log(Math.min(2, 4, 6, 8)); // output: 2
console.log(Math.pow(2, 3)); // output: 8
console.log(Math.random()); // output: a random number between 0 and 1
console.log(Math.round(2.4)); // output: 2
console.log(Math.sqrt(16)); // output: 4

//------------------------------------------------------------------------------------------------------------------------------------

//object method
const myObject = {name: "John", age: 30};
console.log(Object.keys(myObject)); // output: ["name", "age"]
console.log(Object.values(myObject)); // output: ["John", 30]
console.log(Object.entries(myObject)); // output: [["name", "John"], ["age", 30]]
console.log(Object.assign(myObject, {city: "New York"})); // adds a new property "city" to myObject and returns myObject
console.log(myObject); // output: {name: "John", age: 30, city: "New York"}
