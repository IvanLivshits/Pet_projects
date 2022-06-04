'use strict';
/*
function calcAge(birthYear) {   //Function scope
    const age = 2022 - birthYear;
    
    function printAge() {   //Function scope
        const output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output);

        if(birthYear >= 1991 && birthYear <= 2000) {    //Block scope (ES6)
            var millennial = true;
            const firstName = 'Mary'    //Because of the change of function scope in console will be shown name Mary
            const str = `Oh, and you're a millennial, ${firstName}`;
            console.log(str)

            function add(a, b) {
                return a + b;
            }
        }
        //console.log(str); => Reference Error
        console.log(millennial);
        //console.log(add(2,3)) => without strict mode it will works
    }
    printAge();

    return age;
}

//Global scope
const firstName = 'Ivan';
calcAge(1999);
*/

//Variables
console.log(me);    //=> undefined
// console.log(job);    => Reference Error because of TDZ (Temporal Dead Zone)
// console.log(year);   => Reference Error because of TDZ

var me = 'Ivan';
let job = 'programmer';
const year = 1999;

//Functions
console.log(addDecl(1, 2));
//console.log(addExpr(1, 2));   => Type Error because of TDZ
//console.log(addArrow(1, 2));    => Type Error because of TDZ

function addDecl(a, b) {
    return a + b
}

const addExpr = function(a, b) {
    return a + b
}

const addArrow = (a, b) => a + b
//If we change const(let) to var we will take an undefined

//Example
//Code below will return message to console because of hosting
if(!numProducts) deleteShoppingCart();

var numProducts = 10; 

function deleteShoppingCart() {
    console.log('All products deleted!')
}

var x = 1;
let y = 2;  //Don't create properties on a window object
const z = 3;    //Don't create properties on a window object

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z)
