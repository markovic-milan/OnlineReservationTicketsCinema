const express = require('express')
const cors = require('cors')
const app = express();
const db = require('./models');

const { authJwt } = require("./middleware");

app.use(express.json());
app.use(cors());
//Rute
const filmRouter = require('./routes/Filmovi');
app.use("/filmovi", filmRouter)

const saleRouter = require('./routes/Sale');
app.use("/sale", saleRouter)

const korisniciRouter = require('./routes/Korisnici');
app.use("/korisnici", korisniciRouter)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server je pokrenut na portu 3001");
    });
});