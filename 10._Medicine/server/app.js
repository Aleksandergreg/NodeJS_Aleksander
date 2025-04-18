import 'dotenv/config';

import express from 'express';

const app = express();

app.use(express.json()); //motherfucking middleware for json parsing hihi

import cors from 'cors';
app.use(cors({
origin : true,
credentials : true
}));

import session from 'express-session';

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))


// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

import pillsRouter from './routers/pillsRouter.js'

app.use(pillsRouter);

import employeesRouter from './routers/employeesRouter.js'
app.use(employeesRouter)



const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
