const express = require("express");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

const { hashPassword, validatePassword } = require("../util/Util");
const { Korisnici } = require("../models");
const config = require("../config/auth.config")
const { authJwt } = require("../middleware");

const router = express.Router();


//Dodati za prijavu
router.post("/auth/login", async (req, res, next) => {
    try {
        const korisnicko_ime = req.body.korisnicko_ime;
        const _lozinka = req.body.lozinka;

        if (!korisnicko_ime || !_lozinka) {
            throw new ("Provjerite parametre.");
        }

        const korisnik = await Korisnici.findOne({
            where: {
                korisnicko_ime
            }
        });

        if (!korisnik || !validatePassword(_lozinka, korisnik.lozinka)) {
            throw new Error("Neispravno korisnicko ime ili lozinka.");
        }

        const accessToken = jwt.sign({ id: korisnik.id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        korisnik.lozinka = undefined;

        res.json({
            korisnik,
            accessToken
        });
        next();
    } catch (error) {
        next(error);
    }
});


router.post("/", async (req, res, next) => {
    try {
        const korisnik = req.body;
        const error = new Error();
        error.code = 400;

        if (!korisnik.ime || !korisnik.prezime || !korisnik.email || !korisnik.korisnicko_ime || !korisnik.lozinka) {
            error.message = "Provjerite parametre.";
            throw error;
        }

        if (await Korisnici.findOne({
            where: {
                korisnicko_ime: korisnik.korisnicko_ime
            }
        })) {
            error.message = "Korisničko ime je zauzeto.";
            throw error;
        }

        korisnik.lozinka = hashPassword(korisnik.lozinka);
        const result = await Korisnici.create(korisnik);

        const accessToken = jwt.sign({ id: korisnik.id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        result.lozinka = undefined;

        res.json({
            korisnik: result,
            accessToken
        });
        next();

    } catch (error) {
        res.status(400).send(error.message);
        next(error);
    }

});


router.put("/promjena-lozinke/:id", authJwt.verifyToken, async (req, res, next) => {
    try {
        const _id = req.params.id;
        const {lozinka, staraLozinka} = req.body;

        if (!_id || !lozinka || !staraLozinka) {
            throw new Error("Provjerite parametre.");
        }

        const korisnik = await Korisnici.findOne({
            where: {
                id: _id,
            }
        });

        if (!validatePassword(staraLozinka, korisnik.lozinka))
            throw new Error("Stara lozinka je pogrešna.");

        const hash = hashPassword(lozinka);
        const result = await Korisnici.update({
            lozinka: hash
        }, {
            where: { id: _id },
        });
        
        res.json(result);
        next();


    } catch (error) {
        next(error);
    }


});

router.delete("/:id", authJwt.verifyToken, async (req, res, next) => {
    try {
        const _id = req.params.id;

        if (!_id) {
            throw new Error("Greska");
        }

        const result = await Korisnici.destroy({
            where: { id: _id }
        });

        res.json(result);
        next();
    } catch (error) {
        next(error);
    }


});

module.exports = router;
