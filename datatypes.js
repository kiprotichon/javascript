// javasript data types  can be categorized  into two main types : primitive and non-primitive(or reference) types.
//primitive /simple types include :string, number, boolean, null, undefined
// non-primitive /complex composite types include: object, array, function

//Data types in javascript are the different kinds of values that can be stored and manipulated within the 
// language.understanding these data types is crucial for effective programming in JavaScript.


let email878675 = "albert@eldohub.co.ke";// string-- names,passords , locations.,country etc
let age = 25; // number -- age, height, weight, temperature etc include decimal numbers
let isActive = true; // boolean -- true or false values, such as isLoggedIn, isAdmin, isVerified etc
let isKenyan = false;
let isLoading = true;


//null- null is a special value that represents the intentional absence of any object value.It is often used to indicate that a variable should not point to any object or value.
let user = null; // user is intentionally set to no value - emtpy cup

let userName; // undefined - variable is declared but not assigned a value yet - emty cup


//Array - a list of items, which can be of any date type .Arrays are used to store multiple values in a single variable.
//  They are ordered collections of values,  and can contain elements of different data types, including other arrays or objects.

let fruits = ["apple", "banana", "cherry"]; // array of strings
let numbers = [1, 2, 3, 4, 5]; //
// array of numbers
let mixedArray = ["apple",42, true, [1,2,3],null]; // array with mixed data
let coordinates = [
    [1, 2],
    [3, 4],
    [5, 6]
];// array of arrays (2D array)

let marks = [85, 90, 78, 92]; // array of numbers representing student marks






//Object - a collection of key-value pairs, where each key is a string and the value can be of any data type. 
//Objects are used to represent complex data structures and can contain properties and methods.

let userProfile = {
    name: "Tonny",
    age: 30,
    isActive: true,
    address: {
        city: "Nairobi",
        country: "Kenya"
    },
    hobbies: ["reading","coding", "traveling"],

}; // object with properties and nested objects/arrays


//Function  -  ablock of code that can be called and executed. Funcrions accn take parameter and return values.They are used to enscapsullate reusable logic and perform specific tasks.
fuction greet(name) {
    return `Hello, ${name}!`;

}//function that takes a name  as aparameeter and returns a greeting messaage
greet("Tonny"); // calling the function with "Tonny" as an argument
greet("kiprotich"); // calling the function with "kiprotich" as an argument



//Explore operators in js
//The truth table
//++var var++ ,

//control flow statements - conditions and loops 