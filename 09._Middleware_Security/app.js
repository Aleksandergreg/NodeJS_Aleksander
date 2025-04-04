import express from 'express';

const app = express();

app.use(express.static('public'));

import middlewareRouter from "./routers/middlewareRouter.js"

import authRouter from "./routers/authRouter.js"

app.use(middlewareRouter);
app.use(authRouter);


function greetLoggedInUsers(req, res, next) {
    //lets assume that we do a DB check to see that they are logged in here
    console.log("Welcome, logged in user");
    next();

}

app.use("/auth", greetLoggedInUsers);

app.get("/*splat", (req,res) => {
    res.send("<h1>Not Found</h1>")
});


const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
