// task create a function called getRandomInt that has the paramaters
// task min and max and an empty body for now
//hoisting: betyder at noget bliver løftet op
console.log(getRandomInt(0,10));

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max + 1 - min) - min);
}