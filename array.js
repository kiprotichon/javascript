// A javascript Array is a list- like object that is used to store multiple  values in a singular variable.

const cartList = ["apple", "bread" , "eggs", "cheese"];


//Arrays can hold  items of any type , including numbers , strings, objects and even other arrays .
const mixedArray = [42, " banana", {name: "john"},[1,2,3]];

//Accesing values in an array is done using index numbers, starting from 0. - Technically an array is an object ,but has index p[roperties instead of named properties .


console.log(cartList[0]);//Output: apple- accesing the first item
console.log(cartList[2]);//Output: milk- accesing the third item
//Task: Log the second item in the mixed array
console.log(mixedArray[1]);

//log number/value 2 from the last item in the mixedarray
console.log(mixedArray[3][1] );


console.log(mixedArry[2].name);


