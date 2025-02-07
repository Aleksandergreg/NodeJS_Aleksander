// task create a function called getRandomInt that has the paramaters
// task min and max and an empty body for now
//hoisting: betyder at noget bliver løftet op
console.log(getRandomInt(0,10));

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max + 1 - min) - min);
}

const getRandomIntAnonymousFunction = function (min, max){
    return Math.floor(Math.random() * (max + 1 - min) - min);
  };

  const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max +1 -min) - min);
  };

  console.log(getRandomIntArrowFunction(0,10));

                //name:string   action: function
                //action is a callback function
//a callback is a function that is passed as a paramterr to another function
//possibly with the aim of calling it later (but not necessarily)
  function genericPerformer(name, action) {
    return action(name);
  }
//sende en funktion der muligvis kan blive kaldt senere: callback
//Lasse coding
const codingAction = (name) => `${name} likes coding.`;

//assignment: using the generic performer, I would like it to say:
//assignment Lasse likes coding.. write it below

console.log(genericPerformer("Lasse", codingAction));

//Prints [Function: getRandomInt]: a function reference
console.log(getRandomInt);

//Andreas sleeping

function sleepingAction(name){
    return `${name} loves sleeping;`
}

// Assignment: Andreas loves sleeping

console.log(genericPerformer("Andreas", sleepingAction));

//tara boxing
//assignment: the desired result is: tara owns at boxing
//write it all as a one-liner
//const codingAction = (name) => `${name} likes coding.`;

console.log(genericPerformer("Tara", (name) => `${name} likes boxing`))

