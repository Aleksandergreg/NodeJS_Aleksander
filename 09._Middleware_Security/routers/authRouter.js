import { Router } from "express";

const router = Router();


function isAdmin(req, res, next){
    const userIsAdmin = true;
    if(userIsAdmin){
        req.isAdmin= userIsAdmin;
        req.username = "Johnnie";
        return next();    
    }
    res.status(403).send({ message: "Sorry. You do not have permission" });
  
}

router.get("/auth/admin", isAdmin, (req, res) => {
    console.log(req.isAdmin, req.username);
    res.send({ message: "You are an admin!" });
});

router.get("/auth/user", (req, res) => {
    res.send({ message: "You are just a normal human being of flesh and blood!" });
});
export default router;
