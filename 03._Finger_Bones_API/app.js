
//importerer ved hjælp af require
const express = require('express');

//instansiere express
const app = express();

const fingerBonesRouter = express.Router();

const fingerBones = [
    { id: 1, name: "Index", details: "..." },
    { id: 2, name: "Middle", details: "..." }
]

fingerBonesRouter.get("/", (req, res) => {
    res.send({ data: fingerBones });
});

fingerBonesRouter.get("/:id", (req, res) => { 
    const id = Number(req.params.id, 10);
    const foundFingerBone = fingerBones.find(fb => fb.id === id);

    if (!foundFingerBone) {
        return res.status(404).json({ error: "Fingerbone not found" });
    }

    res.send({ data: foundFingerBone });
});

app.use('/fingerbones', fingerBonesRouter)

const PORT = 8080;
app.listen(PORT);