import React from 'react'
import "./MovieInfo.css"
import slika from '../movie/download.jpg'

function MovieInfo(props) {
    const seatHandler = (event) => {
        if(event.target.style.background === "lightblue"){
            event.target.style.background="rgb(168, 144, 144)";
         }else{
            event.target.style.background="lightblue";
        }
    }
    return (
        <div className="movie-reservation-container">
            <div className="transparent-background">                
                <div className="movie-info-container">
                    <div className="movie-img">
                        <img src={slika}/>
                    </div>
                    <div className="movie-text">
                        <p>{props.movie.naslov}</p>
                        <p>{props.movie.opis}</p>
                        <p>{props.movie.vrijemePrikaza}</p>
                    </div>
                </div>
                <div className="horizontal-fill"></div>
                <div className="reservation-container">
                    <div className="seats">
                        <div className="screen">Izaberite sjediste</div>
                    <div class="grid-container">
                        <div class="grid-item"><button onClick={seatHandler}>1</button></div>
                        <div class="grid-item"><button>2</button></div>
                        <div class="grid-item"><button>3</button></div>
                        <div class="grid-item"><button>4</button></div>
                        <div class="grid-item"><button>5</button></div>
                        <div class="grid-item"><button>6</button></div>
                        <div class="grid-item"><button>7</button></div>
                        <div class="grid-item"><button>8</button></div>
                        <div class="grid-item"><button>9</button></div>
                        <div class="grid-item"><button>10</button></div>
                        <div class="grid-item"><button>11</button></div>
                        <div class="grid-item"><button>12</button></div>
                        <div class="grid-item"><button>13</button></div>
                        <div class="grid-item"><button>14</button></div>
                        <div class="grid-item"><button>15</button></div>
                        <div class="grid-item"><button>16</button></div>
                        <div class="grid-item"><button>17</button></div>
                        <div class="grid-item"><button>18</button></div>
                        <div class="grid-item"><button>19</button></div>
                        <div class="grid-item"><button>20</button></div>
                        <div class="grid-item"><button>21</button></div>
                        <div class="grid-item"><button>22</button></div>
                        <div class="grid-item"><button>23</button></div>
                        <div class="grid-item"><button>24</button></div>
                        <div class="grid-item"><button>25</button></div>
                        <div class="grid-item"><button>26</button></div>
                        <div class="grid-item"><button>27</button></div>
                        <div class="grid-item"><button>28</button></div>
                        <div class="grid-item"><button>29</button></div>
                        <div class="grid-item"><button>30</button></div>
                        <div class="grid-item"><button>31</button></div>                    
                        <div class="grid-item"><button>32</button></div>
                        <div class="grid-item"><button>33</button></div>
                        <div class="grid-item"><button>34</button></div>
                        <div class="grid-item"><button>35</button></div>
                        <div class="grid-item"><button>36</button></div>
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
                                <input type="text" id="seats-numbers" name="seat-numbers" readOnly className="input-seat" placeholder="23,24"></input>
                                <div className="prostor"/>
                                <input type="submit" value="Potvrdi" className="button-submit"/>
                                            </form></div>
                </div>
            </div> 
        
       </div>
    )
}

export default MovieInfo
