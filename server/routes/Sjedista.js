const express = require('express');
const router  = express.Router();
const { Sjedista } = require("../models");


router.get("/:SaleId", async (req, res) => {
    const SaleId = req.params.SaleId;
    const sjedista = await Sjedista.findAll({ where: {
        SaleId: SaleId
    }});
    res.json(sjedista);
  });

router.post("/", async (req, res)=>{
    const sjediste = req.body;
    await Sjedista.create(sjediste);
    res.json(sjediste);
})

module.exports = router;

