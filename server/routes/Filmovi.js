const express = require("express")
const router = express.Router();
const {Filmovi} = require('../models')



router.get('/', async(req, res)=>{
   const listaFilmova = await Filmovi.findAll();
   res.json(listaFilmova);

});

router.post("/", async (req, res) => {
    console.log(req.body);
  const post = req.body;
  await Filmovi.create(post);
  res.json(post);
});

module.exports = router;
