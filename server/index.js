const express = require('express')
const cors = require('cors')
const app = express();
<<<<<<< HEAD
const db = require('./models');
app.use(express.json());
const cors = require('cors');
app.use(cors());
=======
app.use(express.json());

const db = require('./models');
app.use(cors());

>>>>>>> 41fd4decb7b24a9000db16fe844569703211c542
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