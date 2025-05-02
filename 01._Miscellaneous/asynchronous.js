// // Javascript is single-threaded, everything runs on the main-thread

// // database interaction, file handling, fetch / HTTP requests (network)

// // Solution 1: callback functions

// // callback hell, pyramid of doom

// // Solution 2: promises (syntactic sugar for callbacks)

// // pending, fulfilled
//         // resolved / rejected
        
//         new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 try{
//                     // throw "Something went wrong"
//                     resolve("Everything went well");
//                 }
//                 catch(error){
//                     reject(error);
//                 }
//                 resolve("Everything went well");
//                 // reject("Something went wrong");
//             }, 2000);
//         })
//         .then((result) => console.log(result))
//         .catch((error) => console.log(error));

// function myPromiser(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Something good");
//         }, 3000);
//     });
// }

// myPromiser()
// console.log(myPromiser());

// // myPromiser()
// // .then((result) => console.log(result))
// // .catch((error) => console.log(error));

// const result = await myPromiser();
// console.log(result);

function myFetch(URL, options){
   return new Promise((resolve, reject) => {
       setTimeout(() => {
        resolve({
            json: () =>  new Promise((resolve, reject) => resolve("Data from the server"))
        });
       }, 2500);
    })
}

// myFetch()
// .then((response) => response.json())
// .then((result) => console.log(result)); 

(async function executeFetch() {
    const response = await myFetch();
    const result = await response.json();
    console.log(result);
})();

// executeFetch();