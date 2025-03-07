import { response } from "express";
//assignment get the image from: https://dog.ceo/api/breeds/image/random Fetch!
//benytter os af et for loop fordi vi tæller på fingrene, itererer ikke over elementer
export async function getMatches(numberofMatches = 2) {
    const promises = [];
    for (let i = 0; i < numberofMatches; i++){
        const promise = fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        promises.push(promise);
    }
    const results = await Promise.all(promises); 
    const matches = results.map((result) => ({ image: result.message, name : "Fido" }))
    return matches;
};

console.log(await getMatches());



