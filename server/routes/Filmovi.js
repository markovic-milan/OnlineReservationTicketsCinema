const express = require("express")
const router = express.Router();
const {Filmovi} = require('../models')

<<<<<<< HEAD
router.get('/', async (req, res)=>{
    const filmList = await Filmovi.findAll();
    res.json(filmList);
});

router.post("/",async(req, res)=>{
    const post = req.body
   await  Filmovi.create(post);
   res.json(post);
})
=======
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
>>>>>>> 41fd4decb7b24a9000db16fe844569703211c542

module.exports = router;
