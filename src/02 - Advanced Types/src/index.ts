
/* Type alias:
   --> a way to create a new name for an existing type. 
   --> can make complex types more readable & reusable types throughout your code. 
   --> define type aliases using the type keyword*/ 

// eg.
type Point = {x: number, y: number};   //PascalCase is used
const point: Point = {x: 1, y: 2};



// Type aliases can also be used for function types:
type MathOperation = (x: number, y: number) => number;

const add: MathOperation = (x, y) => x + y;
console.log(add(56, 66));  // 122


//-------------------------------------------------------------------------------------------------------------------


/* Union type:
--> a type formed by combining two or more other types allowing a value to be of one of those types. 
--> define a union type using the | (pipe) symbol between the types you want to combine */ 


//* simple union type
// A variable of type 'number' or 'string'
let id: number | string;
id = 7;
id = 'seven'



//* Function Parameters with Union Types:
function kgToLbs(weight: number | string): number {
    if(typeof weight === 'number')
     return weight * 2.22;
    else 
     return parseInt(weight) * 2.2;
}

console.log(kgToLbs(65));  //144.3
console.log(kgToLbs('65kg'));  // 143


//-------------------------------------------------------------------------------------------------------------------


/* Intersection type 
   --> a type formed by combining two or more other types.
   --> represents the combination of all the properties and methods present in each of the constituent types. 
   -->  define an intersection type using the & (ampersand) symbol between the types to intersect. */


// simple Intersection type
type Bird = {name: string, fly: () => void};
type Fish = {name: string, swim: () => void};

// combining both
type FlyingFish = Bird & Fish;

const flyingFish: FlyingFish = {
    name: 'Flying Fish',
    fly: () => console.log('Flying ...'),
    swim: () => console.log('Swimming ...')
     
}


//* Practical intersection example
type  Draggable = {drag: () => void};
type Resizable = {resize: () => void};

// combining both
type UIWidget = Draggable & Resizable;

const textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}



//-------------------------------------------------------------------------------------------------------------------


/* literal types 
    --> specify a variable or parameter that must have a specific, exact value
    --> can be used with string literals, numeric literals, and even boolean literals. */ 


// Numeric Literal Types:
type Quantity = 50 | 70;  //(either 50 or 70)
let quantity: Quantity = 70; 

// String literals
type Genre = 'History' | 'Fiction';
let genre: Genre = 'History';  // valid
// genre: Genre = 'philosophy'; // invalid


// Boolean Literal Types:
type TrueOrFalse = true | false;
const isTrue: TrueOrFalse = true; // Valid
// const isFalse: TrueOrFalse = 'false'; // inValid



//-------------------------------------------------------------------------------------------------------------------


/* Nullable Types 
   --> specify that a variable or parameter can either hold a value of a certain type or be null or undefined. 
   ---> use the union type operator (|) to combine the type with null or undefined */ 

// eg.
function greet(name: string | null | undefined) {
    if(name) 
    console.log(name.toUpperCase());
     else 
     console.log('Holy Moly !!');
        
}
greet(undefined);



//-------------------------------------------------------------------------------------------------------------------


/* Optional channing (?)
    --> to safely access properties or methods on an object without the risk of encountering a TypeError if property is null or undefined. */ 


// eg.
type Customer = { birthday: Date };

function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0)
// optional property accessing operator ?
console.log(customer?.birthday?.getFullYear());



//-------------------------------------------------------------------------------------------------------------------



/*  Nullish coalescing operator (??) 
    --> handle default values for variables or expressions when they are null or undefined
    --> useful when you want to use a fallback value only when the original value is null or undefined

Syntax:
const value = someVariable ?? defaultValue;  */ 

// eg.
let speed: number | null | undefined = undefined;
let ride = {
    Speed: speed ?? 50,  // default value 50 will apply
}

console.log(ride);



//-------------------------------------------------------------------------------------------------------------------


/* Type assertion (also known as type casting) 
   --> a way to tell the compiler to treat a value as if it has a different type than the one it infers.
   --> override the default type inference when TypeScript cannot determine a more specific type for a variable. */ 

// as Keyword:
let language: any = 'TypeScript';
let lneght: number = (language as  string).length;


// in DOM Element
let email = document.getElementById('email') as HTMLInputElement;

// or Angle Bracket Syntax:
email = <HTMLInputElement > document.getElementById('email');
email.value;



//-------------------------------------------------------------------------------------------------------------------

/* Unknown type 
   --> type that represents values whose type is not known at compile time. 
   --> It is more restrictive than the any type because it requires type checking before you can perform operations on values of this type
*/ 

// Declaring Variables with unknown:
let salary: unknown;
salary = 60_000;
salary = '60000k';


// Function Parameters with unknown:
function render(document: unknown) {
    if(typeof document === 'string') {
      document.length();
    }
}



//-------------------------------------------------------------------------------------------------------------------


/* Never type 
   --> represents values that never occur. 
   --> It is often used to indicate that a function will not return normally */ 


// Throwing error
function throwError(message: string): never {
    throw new Error(message);
  }


// with infinite loop
function checking():  never {
    while(true) {
        // code here ...
    }
}



//-------------------------------------------------------------------------------------------------------------------

  