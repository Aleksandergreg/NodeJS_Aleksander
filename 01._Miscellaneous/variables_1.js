//avoid var
//const name = 'Aleksander';

// const is NOT a constant
// that means that const CAN have it's value changed
// const is a constant in the DECLARATION
// const MUST be declared as it is initialized

const me = {}; //{JS-object}

me.name = "Anders";

const hobbies = ["coding"];

console.log(hobbies)

hobbies.push("drawing", "painting");

console.log(hobbies)

hobbies.pop();

const jsObject = {
    whatAmI : "jsObject",

}

// "" vs. ' `

const dancerName = "Computer";

//"" or '' or ``= string literals
console.log("I can't dance");
console.log('I can "dance"');

// ``= template strings
//${} syntax =string interpolation
console.log(`I can dance ' " ${dancerName}`);

// console.log , vs. +

const assignmentDescription = "... and the value is..";
const value = 4;

console.log(assignmentDescription, value);









