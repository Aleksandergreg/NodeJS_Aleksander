const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
res.send({ data: "This is the root route" });
});



app.get("/welcomepage", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//assignment /blablabla

app.get("/blablabla", (req, res) => {
    res.send({ data: "This is the blablabla" })
});


// assignment create a route for /search that returns an empty JSON
// TASK CREATE A SEARCH WHERE THE QUERY PARAMETER IS Q THAT CONTAINS THE SEARCH
app.get("/search", (req, res) => {
    res.send({ data: `You searched for: ${req.query.q}` });
});

//get request kan sende data enten gennem query string eller en path variabel

//i put, patch og delete kan man sende data med en request body



//assignment implement /yourfavoritenumber
/*
app.get("/yourfavoritenumber/:number", (req,res) =>{
    res.send({ data: `Your favite number is: ${req.params.number}` })
});
*/

const functionReference =  (req,res) =>{
    res.send({ data: `Your favite number is: ${req.params.favoritenumber}` });
};

app.get("/yourfavoritenumber/:favoritenumber", functionReference);

// assignment implement /favoritethings that allows the client to define a favorite flower and animal

app.get("/favoritethings/:flower/:animal", (req, res) => {
    res.send({ data: `Your favorite flower is: ${req.params.flower} and your favorite animal is : ${req.params.animal   }` })

})

app.get("/redirecttofavoritethings", (req, res) => {
    res.redirect("/favoritethings/tulips/sea lions");
});



app.post("/favoritepoliticians", (req, res) => {

    //såfremt req.body er undefined er det et tegn på vi ikke parser json'et
    console.log(req.body);
    
    res.send({ data: req.body });
});

//assignment create a new route and send some data to it through the body
app.post("/favoritedogs", (req, res) => {
    res.send({ data: req.body });
});

app.listen(8080);

