const express = require('express');
const app = express();

const fingerbonesRouter = express.Router();

const fingerbones = [
    { id: 1, name: "Index", details: "..." },
    { id: 2, name: "Middle", details: "..." }
]

fingerbonesRouter.get("/", (req, res) => {
    res.json({ data: fingerbones });
});

fingerbonesRouter.get("/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const fingerbone = fingerbones.find(fb => fb.id === id);

    if (!fingerbone) {
        return res.status(404).json({ error: "Fingerbone not found" });
    }

    res.json({ data: fingerbone });
});

app.use('/fingerbones', fingerbonesRouter)


app.listen(8080);