const express = require('express');

const app = express();


(console.log(new Date())) //UTC

console.log(Date()); //Local date time (CEST FOR US)

console.log(Date.now()); //Unix time / Epoch (seconds since 1970 Jan. 1st)

//assignment: Create a route called /months which returns the current month as a response
// don't put it inside function scope as it will then be initialised everytime that endpoint is called
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get("/months/v2", (req,res) => {
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();

    res.send({ data: currentMonth});
    console.log(currentMonth);
}); 

//ANDERS FORETRUKNE METODER
app.get("/months", (req, res) => {
   

    let currentDate = new Date();
    let currentMonth = monthNames[currentDate.getMonth()]; 

    res.send({ data: currentMonth });
    console.log(currentMonth);
});



app.get("/months/v1", (req, res) => {
    let currentDate = new Date();
    let currentMonth = currentDate.toLocaleString("en-US", { month: "short" }); 

    res.send({ data: currentMonth });
    console.log(currentMonth);
});

app.get("/months/v3", (req, res) => {
    const currentMonth = Date().split(" ")[1];

    res.send({ data: currentMonth });

});

//assignment implement /days that returns the weekday as a word:

app.get("/days", (req, res) => {
    let currentDate = new Date();
    let currentWeekDay = currentDate.toLocaleString("en-US", { weekday: "long"});

    res.send({ data: currentWeekDay});
});

app.get("/days/v1", (req, res) =>{
    let currentDate = new Date();
    let currentDayOfWeek = days[currentDate.getDay()];
    res.send({ data: currentDayOfWeek });
});


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));