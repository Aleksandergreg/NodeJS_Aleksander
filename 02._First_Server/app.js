const express = require('express');
const app = express();

app.get("/", (req, res) => {
res.send({ data: "This is the root route" });
});


//assignment /blablabla

app.get("/blablabla", (req, res) => {
    res.send({ data: "This is the blablabla" })
});






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


app.listen(8080);

