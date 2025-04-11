import express from 'express';

const app = express();

// import cors from 'cors';
// app.use(cors({
//     origin: "http://localhost:5173"
// }));

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
