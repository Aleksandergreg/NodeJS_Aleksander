//hiver router ud af express
import { Router } from 'express';

//instansiere den
const router = Router();

import { frontpagePage, matchesPage, contactPage } from '../util/pages.js';

router.get("/", (req, res) => {
    res.send(frontpagePage);    
});

router.get("/matches", (req, res) => {
    res.send(matchesPage);
});

router.get("/contact", (req, res) => {
    res.send(contactPage)
});



//eksporterer den
export default router;