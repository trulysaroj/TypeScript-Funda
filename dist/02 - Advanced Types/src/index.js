"use strict";
const point = { x: 1, y: 2 };
const add = (x, y) => x + y;
console.log(add(56, 66));
let id;
id = 7;
id = 'seven';
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.22;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(65));
console.log(kgToLbs('65kg'));
//# sourceMappingURL=index.js.map