const express = require("express")
const router = express.Router();
const {Filmovi, Uskoro} = require('../models')

router.get('/', async (req, res)=>{
  const sviFilmovi = [2];
    await Filmovi.findAll().then((filmovi)=>{
      const repertoar = filmovi.map((film) =>{return {"id": film.id,"slika":film.slika, "orginalniNaslov":film.orginalniNaslov,"termini": film.termini,
        "zanr": film.zanr}})
        sviFilmovi[0] = repertoar;
    });      
    
    await Uskoro.findAll().then((filmovi)=>{
      const uskoro = filmovi.map((film) =>{return {"id": film.id,"slika":film.slika, "orginalniNaslov":film.orginalniNaslov, "zanr": film.zanr}})
      sviFilmovi[1] = uskoro;
    });     

    return res.send(sviFilmovi);
});

router.get('/:id', async (req, res)=>{
  await Filmovi.findByPk(req.params.id).then((film)=>{ return res.json(film)})  
});

router.get('/uskoro/:id', async (req, res)=>{
  await Uskoro.findByPk(req.params.id).then((film)=>{ return res.json(film)})  
});

router.post("/", async (req, res) => {
    console.log(req.body);
  const post = req.body;
  await Filmovi.create(post);
  res.json(post);
});

router.post("/u", async (req, res) => {
    console.log(req.body);
  const post = req.body;
  await Uskoro.create(post);
  res.json(post);
});



module.exports = router;
