const express = require("express");
const router = express.Router();
const { Karte } = require("../models");

router.get("/", async (req, res) => {
  const listaKarti = await Karte.findAll();
  res.json(listaKarti);
});

router.get("/:korisnici_id", async (req, res) => {
  const korisnici_id = req.params.korisnici_id;
  const karta = await Karte.findAll({
    where: {
      korisnici_id: korisnici_id,
    },
  });
  res.json(karta);
});

router.get("/filmovi/:filmovi_id", async (req, res) => {
  const filmovi_id = req.params.filmovi_id;
  const karta = await Karte.findAll({
    where: {
      filmovi_id: filmovi_id,
    },
  });
  res.json(karta);
});

router.post("/", async (req, res) => {
  console.log(req.body);

  const karta = {
    datum:req.body.date,
    termin:req.body.time,
    sala:req.body.sala,
    brojSjedista: req.body.brojSjedista,
    FilmoviId:req.body.FilmoviId,
    KorisniciId:req.body.KorisniciId,
    ukupanIznos:'5'
  }
  const result = await Karte.create(karta);
  if(result instanceof Karte){
    res.json({rezervisano:true});}
  else{
    res.json({rezervisano:false});
  }
});

module.exports = router;
