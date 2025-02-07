//"use strict"; kør i strict mode 

//var totalGlobalVariable = "Never EVER!!! do this";
//var globalVariable = "Also NEVER do this"; these are called global scope

//rules:
//always use const if you can get away with it
//otherwise use let, if something has to change in the declaration



function myFunction(){
    //function scope
}


{
    //block scope. var bløder ind i andre scopes
    var myValue = true;
    {
    var myValue = false;
    }
console.log(myValue)
}

{
    let myValue = true;
    {
    let myValue = false;
    }
console.log(myValue)
}
//guard statement i <= 5
for (var i = 0; i <= 5; i++){
    setTimeout(()=>{
        console.log(i);
    },1000)
}

for (let i = 0; i <= 5; i++){
    setTimeout(()=>{
        console.log(i);
    },1000)
}