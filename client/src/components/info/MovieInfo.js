import React, { useState, useEffect } from "react";
import "./MovieInfo.css";
import * as constants from "../../constants/constants";
import axios from "axios";
import Kino from "../kino/Kino";

function MovieInfo(props) {
  console.log("MOVIE INFO" + props.movie);
  var reservation_container;
  var login_container;
  const [film, setFilm] = useState({ id: -1 });

  const korisnik = {id:-1};

console.log(JSON.parse(localStorage.getItem(constants.ACCOUNT_KEY)));

  if (JSON.parse(localStorage.getItem(constants.ACCOUNT_KEY))) {
    reservation_container = "reservation-container-logged";
    login_container = "login-container-logged";
    korisnik.id=JSON.parse(localStorage.getItem(constants.ACCOUNT_KEY)).korisnik.id;
  } else {
    reservation_container = "reservation-container";
    login_container = "login-container";
  }

  if (film !== null && film.termini === undefined) {
    reservation_container = "reservation-container-uskoro";
    login_container = "reservation-container-uskoro";
  }

  const id = props.movie;
  useEffect(() => {
    if (id > 100) {
      axios.get(`http://localhost:3001/filmovi/uskoro/${id}`).then((resp) => {
        setFilm(resp.data);
      });
    } else {
      axios.get(`http://localhost:3001/filmovi/${id}`).then((resp) => {
        setFilm(resp.data);
      });
    }
  }, []);

  function handleSubmit(event){
    event.preventDefault();
    
    const data = new FormData(event.target);
    const jsonData= {};
    
    data.forEach((value,key) => (jsonData[key] = value));
    console.log(jsonData);
    axios.post('http://localhost:3001/karte',jsonData).then((res)=> {
      console.log(res.data);
      if(res.data.rezervisano === true){
        alert("Uspjesno ste rezervisali!");
        window.location.reload();
      }else{
        alert("Niste rezervisali!");
        window.location.reload();
      }
    });
  }

  function changeHandler(){
      
  }

  const isLoaded = film.id !== -1;
  return (
    <div className="movie-reservation-container">
      {isLoaded ? (
        <div className="transparent-background">
          <div className="movie-info-container">
            <div className="movie-img">
              <img src={film.slika} />
            </div>
            <div className="movie-text">
              <p className="slova">Originalni naslov: {film.orginalniNaslov}</p>
              <p className="slova">Termini prikazivanja: {film.termini}</p>
              <p className="slova">Žanr: {film.zanr}</p>
              <p className="slova">Režiser: {film.reziser}</p>
              <p className="slova">Glumci: {film.glumci}</p>
              <p className="slova">Datum premijere: {film.datumPremijere}</p>
              <p className="slova">Trajanje filma: {film.trajanjeFilma}</p>
              <p className="slova">Sadržaj filma: {film.sadrzajFilma}</p>
            </div>
          </div>
          <div className="horizontal-fill"></div>
          <div className={login_container}>
            <label>Za rezervaciju karata potrebno je da se prijavite!</label>
            <a className="prijava" href="/prijava">
              Prijava
            </a>
          </div>
          <div className={reservation_container}>
            <div className="seats">
              <div className="screen">Izaberite sjediste</div>
              <div class="grid-container">
                <Kino movie={props.movie}/>
              </div>
            </div>
            <div className="reservation-form">
              <form onSubmit={handleSubmit}>
                <label>Datum</label>
                <select id="date" name="date">
                  <option value={film.datumPremijere}>
                    {film.datumPremijere}
                  </option>
                </select>
                <label>Vrijeme</label>
                <select id="time" name="time" onChange={changeHandler}>
                  {id < 100 ? (
                    film.termini.split(",").map((ter) => {
                      return <option value={ter}>{ter}</option>;
                    })
                  ) : (
                    <span />
                  )}
                </select>
                <label>Broj računa</label>
                <input
                  type="text"
                  name="racun"
                  className="input-seat"
                  maxLength="12"
                  minLength="12"
                />
                <label>Pozicije</label>
                <input
                  type="text"
                  id="seats-numbers"
                  name="brojSjedista"
                  readOnly
                  className="input-seat"
                ></input>
                <div className="prostor" id="ukupno">
                  0.00 KM
                </div>
                <input
                  type='submit'
                  value="Potvrdi"
                  className="button-submit"
                />
                <input type="hidden" name="FilmoviId" value={id} />
                <input type="hidden" name="KorisniciId" value={korisnik.id} />
                <input type="hidden" name="sala" value='1' />
              </form>
            </div>
          </div>
        </div>
      ) : (
        <span />
      )}
    </div>
  );
}

export default MovieInfo;
