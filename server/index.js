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



const korisniciRouter = require('./routes/Korisnici');
app.use("/korisnici", korisniciRouter)


const vrsteSjedistaRouter = require('./routes/VrsteSjedista');
app.use("/vrsteSjedista", vrsteSjedistaRouter)

const kinoRouter = require('./routes/Kino');
app.use("/kino", kinoRouter)


const saleRouter = require('./routes/Sale');
app.use("/sale", saleRouter)

const sjedistaRouter = require('./routes/Sjedista');
app.use("/sjedista", sjedistaRouter)




db.sequelize.sync().then(()=>{
app.listen(3001, ()=>{
    console.log("Server je pokrenut na portu 3001");
});
});