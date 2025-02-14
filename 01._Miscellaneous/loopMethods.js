// forEach, map, filter, reduce, findIndex, find

const myNumbers = [1, 2, 3, 4 ,5 ,6];

//assignment: get a list of the numbers doubled

const doubledNumbers = myNumbers.map((myNumber) => myNumber * 2);

console.log(doubledNumbers);


//map mapper 1:1
//benytter os altid af loopMetohds ingen for,while etc
//bruger sjældent foreach

const sattelites = [
    {
        name: "International Space Station",
        height: 12.000
    },
    {
        name: "MIR",
        height : 0
    },
    {
        name: "James Webb",
        height: 27.000
    }
];

// assignment: lower the height for all satelites by 3.00 except for mir



const loweredHeight = sattelites.map(sattelite => {
    if(sattelite.name !== "MIR"){
        return { ...sattelite, height: sattelite.height - 3};
    }
    return sattelite;
})

//Anders' løsning

const satelittesAdjustedHeight = sattelites.map((sattelite) => {
    if ( sattelite.name === "MIR"){
        return sattelite
    }
    return {
        height: sattelite.height - 3.000,
        name: sattelite.name
    }
});

const sattelitesUpdatedHeight = sattelites.map((sattelite) =>({
    height: sattelite.name === "MIR" ? sattelite.height : sattelite.height -3,
    name: sattelite.name
 }));


//console.log(loweredHeight);
//console.log(satelittesAdjustedHeight)
console.log(sattelitesUpdatedHeight)

const listOfReactions = ["thumbs down", "thumbs down", "thumbs down"];

//assignment: make a list that reacts as many times as above with thumbs up

const thumbsUp = listOfReactions.map((reaction) => "thumbs up")

console.log(thumbsUp);