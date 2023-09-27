
//* TypeScript built-in data type ------>

let age: number = 28;
let netWorth: number = 100_000_000_000; // can use underscore to seperate the digits to improve readability
let fullName: string = "Alexander";
let is_married: boolean = false;
let networth; //any

// Don't need to explicitly indicate the type of data
let mode = "beginner"; // string



//-------------------------------------------------------------------------------------------------------------------



//* Any type ---> Represents a dynamic type that can hold values of any type.
// Avoid using this when possible, as it reduces type checking.

let step: any;
step = "first";
step = 10000;

// another example
function greet(name: any) {
  console.log("Hello " + name);
}
greet("Ram");




//-------------------------------------------------------------------------------------------------------------------


//* Arrays ---> Need to decleare type of data that array will contain
let ranks = [1, 2, 3, "4"]; // In JavaScript

// In TypeScript
let rankList: number[] = [1, 2, 3, 4];
let letters: string[] = ["a", "b", "c", "d"];
let list: any[] = [1, 2, 3, "4"];



//-------------------------------------------------------------------------------------------------------------------



//* Tuple ---> Array with a fixed number of elements, where each element can have a diff particular type.

// use case: 1, 'Lisa'
let userListTuple: [number, string] = [1, "Lisa"];

// accessing tuple element
let index: number = userListTuple[0];
let useName: string = userListTuple[1];

userListTuple.push("Losan");
console.log(userListTuple);

// Note: Use only when 2 or limited elements



//----------------------------------------------------------------------------------------------------------------

//*  Enum ---> (short for "enumeration"), a way to define a set of named constant values

// const samll = 1;
// const medium = 2;
// const large = 3;

// Group constant vlaue in one structure
enum Size {
  small = 1,
  medium = 2,
  large = 3,
}

// accessing value from enum
let mySize = Size.medium;
console.log(mySize); //2



//--------------------------------------------------------------------------------------------------------------------------


//* Function ---> can specify the types of function parameters and the return type using type annotations

// simple multiply function
function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(2, 7)); // 14

// another example
function calTax(income: number, taxYear = 2023): number {
  // taxyear default value
  if (taxYear > 2022) return income * 0.1;
  return income * 0.13;
}

console.log(calTax(70000)); //9100



//-------------------------------------------------------------------------------------------------------------------------



//* Objects --->  TypeScript allows you to define the shape of objects using interfaces, classes, or type annotations.

const dev: { name: string; age: number, joinedOn: (date: Date) => void } = {
  name: "Harmna",
  age: 20,

// method
joinedOn(date: Date) {
    console.log(date);  
},
};




//-------------------------------------------------------------------------------------------------------------------------


