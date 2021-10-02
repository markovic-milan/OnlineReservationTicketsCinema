const express = require("express")
const router = express.Router();
const {Sale} = require('../models')

router.get('/', (req, res)=>{
    res.json("SALEEEEEEEE");

});

router.post("/",async(req, res)=>{
    const post = req.body
   await  Sale.create(post);
   res.json(post);

     
})

module.exports = router;
