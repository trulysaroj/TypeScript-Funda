"use strict";
let age = 28;
let netWorth = 100000000000;
let fullName = "Alexander";
let is_married = false;
let networth;
let mode = "beginner";
let step;
step = "first";
step = 10000;
function greet(name) {
    console.log("Hello " + name);
}
greet("Ram");
let ranks = [1, 2, 3, "4"];
let rankList = [1, 2, 3, 4];
let letters = ["a", "b", "c", "d"];
let list = [1, 2, 3, "4"];
let userListTuple = [1, "Lisa"];
let index = userListTuple[0];
let useName = userListTuple[1];
userListTuple.push("Losan");
console.log(userListTuple);
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
let mySize = Size.medium;
console.log(mySize);
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 7));
function calTax(income, taxYear = 2023) {
    if (taxYear > 2022)
        return income * 0.1;
    return income * 0.13;
}
console.log(calTax(70000));
const dev = {
    name: "Harmna",
    age: 20,
    joinedOn(date) {
        console.log(date);
    },
};
//# sourceMappingURL=index.js.map