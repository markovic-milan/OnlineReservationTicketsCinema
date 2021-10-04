const express = require("express")
const router = express.Router();
const {VrsteSjedista} = require('../models')

router.get('/', async(req, res)=>{
   const listaVrsta = await VrsteSjedista.findAll();
   res.json(listaVrsta);

});

router.post("/", async (req, res) => {
    console.log(req.body);
  const post = req.body;
  await VrsteSjedista.create(post);
  res.json(post);
});

module.exports = router;
