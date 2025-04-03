import express from 'express';

import path from 'path';
//importer partieslibrary
//asciidoc that converts .md to

//const { parties } =  require('./util/partiesLibrary.js');
// console.log(parties);
// import partiesLibrary from './util/partiesLibraryES.js'; 

const app = express();
// console.log(partiesLibrary);

//sikkerhedsfeature, vi fortæller klienten du må gerne tilgå alt i public, hvis vi ikke gør dette for vi MIME type. laver routes til alle vores static filer
//så det siger sig selv at alt der ikke ligger i denne deklaration er private
app.use(express.static('public'));

let visitorCount = 0;
//kunne f.eks også lave vores util til public, da vi f.eks ville have validering på password, jeg skulle bruge både i frontend og backend

app.get("/", (req, res)=> {
    res.sendFile(path.resolve("public/frontpage/frontpage.html"));
});

//dirname so it matches the computer it is run on. if doing it without dirname ./ it will say it needs an absolute path
app.get("/partypage", (req, res) => {
    res.sendFile(path.resolve("public/partypage/partypage.html"));
});

app.get("/dangerouspage", (req,res) => {
    res.sendFile(path.resolve("public/dangerouspage/dangerouspage.html"));
});


//task create a route /visitourcounts that returns the visitor count
app.get("/visitorscounts", (req, res) => {
    res.send({ data: ++visitorCount});
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));

//bytestream få skrevet noter på dette til dokumentation

