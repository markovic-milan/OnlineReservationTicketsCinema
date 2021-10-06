const express = require("express");

const { Op } = require("sequelize");
const { hashPassword, validatePassword } = require("../util/Util");
const { Korisnici } = require("../models");

const router = express.Router();

<<<<<<< HEAD
router.get('/', async(req, res)=>{
    const listaFilmova = await Korisnici.findAll();
   res.json(listaFilmova);
=======

//Dodati za prijavu
router.post("/login", async (req, res, next) => {
    try {
        const korisnicko_ime = req.body.korisnicko_ime;
        const _lozinka = req.body.lozinka;

        if (!korisnicko_ime || !_lozinka) {
            throw new Error("Provjerite parametre.");
        }

        const korisnik = await Korisnici.findOne({
            where: {
                korisnicko_ime
            }
        });

        if (!korisnik || !validatePassword(_lozinka, korisnik.lozinka)) {
            throw new Error("Neispravno korisnicko ime ili lozinka.");
        }

        korisnik.lozinka = undefined;

        res.json(korisnik);
        next();
    } catch (error) {
        next(error);
    }
});


router.post("/", async (req, res, next) => {
    try {
        const korisnik = req.body;


        if (!korisnik.ime || !korisnik.prezime || !korisnik.email || !korisnik.korisnicko_ime || !korisnik.lozinka) {
            throw new Error("Provjerite parametre.");
        }


        if (await Korisnici.findOne({
            where: {
                korisnicko_ime: korisnik.korisnicko_ime
            }
        }))
            throw new Error("Korisnicko ime je vec zauzeto.");

        korisnik.lozinka = hashPassword(korisnik.lozinka);
        const result = await Korisnici.create(korisnik);
        result.lozinka = undefined;
        res.json(result);
        next();

    } catch (error) {
        next(error);
    }

>>>>>>> 6b25768e51c574744ca22ecfbf82f43e65de3dc4
});


router.put("/:id", async (req, res, next) => {

    try {

        const _id=req.params.id;
        const korisnik = req.body;


        if (!_id || !korisnik.ime || !korisnik.prezime || !korisnik.email || !korisnik.korisnicko_ime || !korisnik.lozinka) {
            throw new Error("Provjerite parametre.");
        }


        if (await Korisnici.findOne({
            where: {
                id: {[Op.ne]: _id},
                korisnicko_ime: korisnik.korisnicko_ime
            }
        }))
            throw new Error("Korisnicko ime je vec zauzeto.");

        const result = await Korisnici.update(korisnik, {
            where: {id:_id}, 
        });
        res.json(result);
        next();

        
    } catch (error) {
        next(error);
    }


});

router.delete("/:id", async (req, res, next) => {

    try {

        const _id=req.params.id;

        if(!_id)
        throw new Error("Greska");

        const result=await Korisnici.destroy({
            where: {id:_id}
        });


      
        res.json(result);
        next();

        
    } catch (error) {
        next(error);
    }


});

module.exports = router;
