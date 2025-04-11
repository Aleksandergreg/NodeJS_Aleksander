import 'dotenv/config';

import express from 'express';

const app = express();

app.use(express.static(path.resolve('../client/dist')));

app.use(express.json()); //motherfucking middleware for json parsing hihi

import session from 'express-session';

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))


import pillsRouter from './routers/pillsRouter.js'

app.use(pillsRouter);

import employeesRouter from './routers/employeesRouter.js'
app.use(employeesRouter)

import path from 'path';

app.get("/{*splat}", (req,res) =>{
  res.sendFile(path.resolve('../client/dist/index.html'));
})



const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
