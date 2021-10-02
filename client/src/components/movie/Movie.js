import React from "react";
import './Movie.css';

const Movie = (props) =>{
    console.log(props.movie);
    return <div className="movie-container">
        <div className="movie-wrapper">
            <div className="movie-img-container">
                <img src={props.movie.slikaURL} alt="slika"></img>
            </div>
            <div className="movie-info-container">
                <h3>{props.movie.naslov}</h3>
            </div>
            <div className="movie-info-container">
                <h3>{props.movie.vrijemePrikaza}</h3>
            </div>
            <div className="movie-button-container">
                <button>Rezerviši</button>
            </div> 
        </div>
    </div>
}

export default Movie;