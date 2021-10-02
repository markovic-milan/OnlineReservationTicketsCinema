const express = require("express")
const router = express.Router();
const {Filmovi} = require('../models')

router.get('/', (req, res)=>{
    res.json("Helo");

});

router.post("/",async(req, res)=>{
    const post = req.body
   await  Filmovi.create(post);
   res.json(post);

     
})

module.exports = router;
