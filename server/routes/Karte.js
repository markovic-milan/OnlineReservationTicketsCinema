const express = require('express');
const router  = express.Router();
const { Karte } = require("../models");

router.get('/', async (req, res)=>{
    const listaKarti = await Karte.findAll();
    res.json(listaKarti);
 
});


router.get("/:korisnici_id", async (req, res) => {
    const korisnici_id = req.params.korisnici_id;
    const karta = await Karte.findAll({ where: {
        korisnici_id: korisnici_id
    }});
    res.json(karta);
  });



router.post("/", async (req, res)=>{
    const karta = req.body;
    await Karte.create(karta);
    res.json(karta);
})

module.exports = router;