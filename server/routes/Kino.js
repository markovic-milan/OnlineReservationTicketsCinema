const express = require("express")
const router = express.Router();
const {Kino} = require('../models')


router.get('/', async(req, res)=>{
   const listaKina = await Kino.findAll();
   res.json(listaKina);

});

router.post("/", async (req, res) => {
    console.log(req.body);
  const post = req.body;
  await Kino.create(post);
  res.json(post);
});

module.exports = router;