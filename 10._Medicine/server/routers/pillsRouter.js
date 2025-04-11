import { Router } from 'express';

const router = Router();

router.get("/pills", (req,res) => {
    res.send ({message : "Here are your Xanax kind sir"})
});

router.post("/pills", (req, res) =>{
    res.send({message : "You have more pills, don't eat them all at once hehe"})
});


export default router;
