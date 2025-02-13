const express = require('express');
const app = express();

const fingerbones = [
    { id: 1, name: "Index", details: "..." },
    { id: 2, name: "Middle", details: "..." }
]

app.get("/fingerbones", (req, res) => {
    res.json({ data: fingerbones });
});

app.get("/fingerbones/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const fingerbone = fingerbones.find(fb => fb.id === id);

    if (!fingerbone) {
        return res.status(404).json({ error: "Fingerbone not found" });
    }

    res.json({ data: fingerbone });
});


app.listen(8080);