const express = require("express")
const router = express.Router();
const {Filmovi} = require('../models')

router.get('/', async (req, res)=>{
    await Filmovi.findAll().then((filmovi)=>{
      const filterFilm = filmovi.map((film) =>{return {"id": film.id,"slika":film.slika, "orginalniNaslov":film.orginalniNaslov,"termini": film.termini,
        "zanr": film.zanr}})
      return res.send(filterFilm);
    });
});

router.get('/:id', async (req, res)=>{
  await Filmovi.findByPk(req.params.id).then((film)=>{ return res.json(film)})
  // await Filmovi.findById(req.params.id).then((film)=>{return res.json(film)});    
});

router.post("/", async (req, res) => {
    console.log(req.body);
  const post = req.body;
  await Filmovi.create(post);
  res.json(post);
});




module.exports = router;
