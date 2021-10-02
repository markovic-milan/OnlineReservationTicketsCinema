const express = require('express')
const app = express();

const db = require('./models');

//Rute
const filmRouter = require('./routes/Filmovi');
app.use("/filmovi", filmRouter)

const saleRouter = require('./routes/Sale');
app.use("/sale", saleRouter)

const korisniciRouter = require('./routes/Korisnici');
app.use("/korisnici", korisniciRouter)


db.sequelize.sync().then(()=>{
app.listen(3001, ()=>{
    console.log("Server je pokrenut na portu 3301");
});
});