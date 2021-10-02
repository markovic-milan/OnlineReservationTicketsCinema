const express = require("express")
const router = express.Router();
const {Korisnici} = require('../models')

router.get('/', (req, res)=>{
    res.json("Korsinici");

});

router.post("/",async(req, res)=>{
    const post = req.body
   await  Korisnici.create(post);
   res.json(post);

     
})

module.exports = router;
