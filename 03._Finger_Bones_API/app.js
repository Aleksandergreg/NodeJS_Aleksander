
//importerer ved hjælp af require
const express = require('express');

//instansiere express
const app = express();

//Middleware to parse json bodies. ASK ANDERS ABOUT THIS
app.use(express.json());

const fingerBonesRouter = express.Router();

const fingerBones = [
    { id: 1, name: "Index", details: "..." },
    { id: 2, name: "Middle", details: "..." }
]
let nextId = 3;

fingerBonesRouter.get("/", (req, res) => {
    res.send({ data: fingerBones });
});

fingerBonesRouter.get("/:id", (req, res) => { 
    const id = Number(req.params.id, 10);
    const foundFingerBone = fingerBones.find(fb => fb.id === id);

    if (!foundFingerBone) {
        return res.status(404).send({ error: "Fingerbone not found" });
    }

    res.send({ data: foundFingerBone });
});

fingerBonesRouter.post("/", (req, res) => {
    const { name, details } = req.body;

    if(!name) {
        return res.status(400).send({ error: "Name is required" });
    }

    const newFingerBone = {
        id: nextId ++,
        name,
        details: details || ""
    };
    
    fingerBones.push(newFingerBone);
    res.status(201).send({ data: newFingerBone });
});

fingerBonesRouter.put("/:id", (req, res) => {
    const id = Number(req.params.id);
    const { name, details } = req.body;

    const index = fingerBones.findIndex(fb => fb.id === id);
    if (index === -1) {
      return res.status(404).json({ error: "Fingerbone not found" });
    }

    if(!name){
        res.status(400).send({ error: "Must contain a name" });
    }

    fingerBones[index] = { ...fingerBones[index], name, details: details || fingerBones[index].details };

    res.send({ data: fingerBones[index] });


});

fingerBonesRouter.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = fingerBones.findIndex(fb => fb.id === id);
    if (index === -1) {
      return res.status(404).send({ error: "Fingerbone not found" });
    }
  
    fingerBones.splice(index, 1);
    res.status(204).end();
  });

app.use('/fingerbones', fingerBonesRouter)

const PORT = 8080;
app.listen(PORT);