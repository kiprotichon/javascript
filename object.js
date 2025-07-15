// An object in javascript is a standalone entity with properties and values.
//It is similar to real-life object, likecar which has properties like color,and type like sedan or suv.
//Object can also have methods, which are functions that belong to the object.


const car = {
    color: "red",
    type: "sedan",
    year: "2020",
    onsale:true,
    start:function () {
        console.log("car started");

    },

};
//Anonymous functiopn - a function wiythout a name 

//Acccessing values in an object can be done using dot notantion or bracket notation.
  
console.log( car.color); //output:red- using dot notation
console.log(car["color"]);//output :red - using bracket notation 

console.log(car.type);//output: sedan
console.log(car.onsale);//output: true
//calling a method/FUNCTION
car.start();
