const express = require('express')
const cors = require('cors')
const app = express();

app.use(express.json());

const db = require('./models');
app.use(cors());
//Rute
const filmRouter = require('./routes/Filmovi');
app.use("/filmovi", filmRouter)

const saleRouter = require('./routes/Sale');
app.use("/sale", saleRouter)

const korisniciRouter = require('./routes/Korisnici');
app.use("/korisnici", korisniciRouter)

const vrsteSjedistaRouter = require('./routes/VrsteSjedista');
app.use("/vrsteSjedista", vrsteSjedistaRouter)

db.sequelize.sync().then(()=>{
app.listen(3001, ()=>{
    console.log("Server je pokrenut na portu 3301");
});
});