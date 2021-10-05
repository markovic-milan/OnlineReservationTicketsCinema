import React from 'react'
import "./MovieInfo.css"
import slika from '../movie/download.jpg'

function MovieInfo(props) {
    const selectedSeats = [];
    var sum = 0;
    const seatHandler = (event) => {
       
        
        if(event.target.style.background === "rgb(3, 255, 221)"){
             event.target.style.background="rgb(255, 255, 255)";
             const index = selectedSeats.indexOf(event.target.innerHTML);
            if(index > -1){
                selectedSeats.splice(index, 1);
                sum-=5;
                document.getElementById("ukupno").innerHTML=sum + ".00 KM";
            }
         }else{
            sum+=5;
            event.target.style.background="rgb(3, 255, 221)";
            selectedSeats.push(event.target.innerHTML);
            document.getElementById("ukupno").innerHTML=sum + ".00 KM";
            
        }
        document.getElementById("seats-numbers").value = selectedSeats;
    
    }
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
                                <div className="prostor" id="ukupno">0.00 KM</div>
                                <input type="submit" value="Potvrdi" className="button-submit"/>
                                            </form></div>
                </div>
            </div> 
        
       </div>
    )
}

export default MovieInfo
