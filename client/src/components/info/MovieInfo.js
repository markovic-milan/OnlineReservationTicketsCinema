import React, { useState, useEffect } from "react";
import "./MovieInfo.css";
import * as constants from "../../constants/constants";
import axios from "axios";

function MovieInfo(props) {
  var reservation_container;
  var login_container;
  if (JSON.parse(localStorage.getItem(constants.ACCOUNT_KEY))) {
    reservation_container = "reservation-container-logged";
    login_container = "login-container-logged";
  } else {
    reservation_container = "reservation-container";
    login_container = "login-container";
  }

  console.log(props.movie.termini);
  const [film, setFilm] = useState({});
  const selectedSeats = [];
  var sum = 0;
  var id =
    props.movie === undefined
      ? window.sessionStorage.getItem("id")
      : props.movie.id;

  useEffect(() => {
    axios.get(`http://localhost:3001/filmovi/${id}`).then((resp) => {
      setFilm(resp.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/sjedista/1").then((resp) => {
      setSjedista(resp.data);
    });
  }, []);

  const [sjediste, setSjedista] = useState([]);

  useEffect(() => {
    window.sessionStorage.setItem("id", film.id);
  }, [film]);

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
<<<<<<< HEAD
  };

  const isLoadedSeats = sjediste.length > 0;
  const loaded = film.length > 0;
  return (
    <div className="movie-reservation-container">
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
                  if (sjediste.rezervisano) {
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
            <form action="/reservation">
              <label>Datum</label>
              <select id="date" name="date">
                <option value="date1">{film.datumPremijere}</option>
              </select>
              <label>Vrijeme</label>
              <select id="time" name="time">
                {props.movie.termini.split(",").map((ter) => {
                  return <option value="time1">{ter}</option>;
                })}
              </select>
              <label>Sala</label>
              <select id="sala" name="sala">
                <option value="sala1">Sala1</option>
                <option value="sala1">Sala2</option>
                <option value="sala1">Sala3</option>
                <option value="sala1">Sala4</option>
              </select>
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
              <input type="submit" value="Potvrdi" className="button-submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
=======
    return (
        <div className="movie-reservation-container">
            <div className="transparent-background">                
                <div className="movie-info-container">
                    <div className="movie-img">
                        <img src={slika}/>
                    </div>
                    <div className="movie-text">
                        <p>{props.movie.orginalniNaslov}</p>
                        <p>{props.movie.datumPremijere}</p>
                        <p>{props.movie.termini}</p>
                        <p>{props.movie.zanr}</p>
                        <p>{props.movie.sadrzajFilma}</p>
                    </div>
                </div>
                <div className="horizontal-fill"></div>
                <div className="reservation-container">
                    <div className="seats">
                        <div className="screen">Izaberite sjediste</div>
                    <div class="grid-container">
                        <div class="grid-item"><button onClick={seatHandler}>1</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>2</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>3</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>4</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>5</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>6</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>7</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>8</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>9</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>10</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>11</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>12</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>13</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>14</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>15</button></div>
                        <div class="grid-item"><button  onClick={seatHandler}>16</button></div>
                        <div class="grid-item"><button  onClick={seatHandler}>17</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>18</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>19</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>20</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>21</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>22</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>23</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>24</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>25</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>26</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>27</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>28</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>29</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>30</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>31</button></div>                    
                        <div class="grid-item"><button onClick={seatHandler}>32</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>33</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>34</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>35</button></div>
                        <div class="grid-item"><button onClick={seatHandler}>36</button></div>
                        </div>
                    </div>
                    <div className="reservation-form">
                        <form action="/reservation">                          
                                <label>Datum</label>
                                <select id="date" name="date">
                                    <option value="date1">4.10.2021.</option>
                                    <option value="date1">5.10.2021.</option>
                                    <option value="date1">6.10.2021.</option>
                                </select>                   
                                <label>Vrijeme</label>
                                <select id="time" name="time">
                                    <option value="time1">15:00</option>
                                    <option value="time1">21:00</option>
                                    <option value="time1">17:00</option>
                                </select>
                                <label>Sala</label>
                                <select id="sala" name="sala">
                                    <option value="sala1">sala1</option>
                                    <option value="sala1">sala2</option>
                                    <option value="sala1">sala3</option>
                                </select>
                                <label>Pozicije</label>
                                <input type="text" id="seats-numbers" name="seat-numbers" readOnly className="input-seat" ></input>
                                <div className="prostor"/>
                                <input type="submit" value="Potvrdi" className="button-submit"/>
                                            </form></div>
                </div>
            </div> 
        
       </div>
    )
>>>>>>> newBranch02
}

export default MovieInfo;
