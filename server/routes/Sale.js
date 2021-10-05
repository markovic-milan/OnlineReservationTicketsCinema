const express = require("express")
const router = express.Router();
const {Sale} = require('../models')

router.get('/', async (req, res)=>{
    const listaFilmova = await Sale.findAll();
    res.json(listaFilmova);
 
});

router.post("/",async(req, res)=>{
    const post = req.body
   await  Sale.create(post);
   res.json(post);
})

module.exports = router;
