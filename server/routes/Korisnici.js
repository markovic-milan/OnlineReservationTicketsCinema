const express = require("express")
const router = express.Router();
const {Korisnici} = require('../models')

router.get('/', async(req, res)=>{
    const listaFilmova = await Korisnici.findAll();
   res.json(listaFilmova);
});

router.post("/",async(req, res)=>{
    const post = req.body
   await  Korisnici.create(post);
   res.json(post);

     
})

module.exports = router;
