const express = require('express');

//importer partieslibrary

const { parties } =  require('./util/partiesLibrary.js');
// console.log(parties);



const app = express();

let visitorCount = 0;

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

//dirname so it matches the computer it is run on. if doing it without dirname ./ it will say it needs an absolute path
app.get("/partypage", (req, res) => {
    res.sendFile(__dirname + "/public/partypage/partypage.html");
});


//task create a route /visitourcounts that returns the visitor count
app.get("/visitorscounts", (req, res) => {
    res.send({ data: ++visitorCount});
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));

//bytestream få skrevet noter på dette til dokumentation
