import React, { useState, useEffect } from "react";
import "./MovieInfo.css";
import * as constants from "../../constants/constants";
import axios from "axios";

function MovieInfo(props) {
  console.log("MOVIE INFO" + props.movie);
  var reservation_container;
  var login_container;
  const [sjediste, setSjedista] = useState([]);
  const [film, setFilm] = useState({ id: -1 });

  if (JSON.parse(localStorage.getItem(constants.ACCOUNT_KEY))) {
    reservation_container = "reservation-container-logged";
    login_container = "login-container-logged";
  } else {
    reservation_container = "reservation-container";
    login_container = "login-container";
  }

  if (film !== null && film.termini === undefined) {
    reservation_container = "reservation-container-uskoro";
    login_container = "reservation-container-uskoro";
  }

  const selectedSeats = [];
  var sum = 0;
  const id = props.movie;
  useEffect(() => {
    if (id > 100) {
      axios.get(`http://localhost:3001/filmovi/uskoro/${id}`).then((resp) => {
        setFilm(resp.data);
        console.log("DATA" + resp.data);
      });
    } else {
      axios.get(`http://localhost:3001/filmovi/${id}`).then((resp) => {
        setFilm(resp.data);
        console.log("DATA" + resp.data);
      });
    }
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/Sjedista/1").then((resp) => {
      setSjedista(resp.data);
    });
  }, []);

  const [karta, setKarte] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/karte/filmovi/${id}`).then((resp) => {
      setKarte(resp.data);
    });
  }, []);

  const seatHandler = (event) => {
    if (event.target.innerHTML === "X") {
    } else {
      if (event.target.style.background === "rgb(3, 255, 221)") {
        event.target.style.background = "rgb(172, 255, 46)";
        const index = selectedSeats.indexOf(event.target.innerHTML);
        if (index > -1) {
          selectedSeats.splice(index, 1);
          sum -= 5;
          document.getElementById("ukupno").innerHTML = sum + ".00 KM";
        }
      } else {
        sum += 5;
        event.target.style.background = "rgb(3, 255, 221)";
        selectedSeats.push(event.target.innerHTML);
        document.getElementById("ukupno").innerHTML = sum + ".00 KM";
      }
      document.getElementById("seats-numbers").value = selectedSeats;
    }
  };
  const isLoadedSeats = sjediste.length > 0;
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
                {isLoadedSeats ? (
                  sjediste.map((sjediste) => {
                    var brojac = 0;

                    karta.forEach((karta) => {
                      if (sjediste.broj === karta.brojSjedista) {
                        brojac = 1;
                        //console.log(terminFilma);
                      }
                    });

                    //console.log(brojac);
                    if (brojac) {
                      return (
                        <div className="grid-item zauzeto">
                          <button onClick={seatHandler} className="zauzeto">
                            X
                          </button>
                        </div>
                      );
                    } else
                      return (
                        <div className="grid-item slobodno">
                          <button onClick={seatHandler}>{sjediste.id}</button>
                        </div>
                      );
                  })
                ) : (
                  <span />
                )}
              </div>
            </div>
            <div className="reservation-form">
              <form
                action="http://localhost:3001/rezervacija"
                method="post"
                enctype="application/json"
              >
                <label>Datum</label>
                <select id="date" name="date">
                  <option value={film.datumPremijere}>
                    {film.datumPremijere}
                  </option>
                </select>
                <label>Vrijeme</label>
                <select id="time" name="time">
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
                {/* <select id="sala" name="sala">
                <option value="sala1">Sala1</option>
                <option value="sala1">Sala2</option>
                <option value="sala1">Sala3</option>
                <option value="sala1">Sala4</option>
              </select> */}
                <label>Pozicije</label>
                <input
                  type="text"
                  id="seats-numbers"
                  name="seat-numbers"
                  readOnly
                  className="input-seat"
                ></input>
                <div className="prostor" id="ukupno">
                  0.00 KM
                </div>
                <input
                  type="submit"
                  value="Potvrdi"
                  className="button-submit"
                />
                <input type="hidden" name="filmId" value={props.movie.id} />
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
