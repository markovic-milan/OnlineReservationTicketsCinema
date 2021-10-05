import React from "react";
import './Movie.css';
import slika from './download.jpg';
import { Link  } from 'react-router-dom';

const Movie = (props) =>{
    console.log("Movie");
    console.log(props.movie.slikaURL);
    var o = {
        pathname: "/details",
        param: props.movie
    }

    return <div className="movie-container">
            <div className="movie-img-container">
                <img src={slika} alt="slika"></img>
            </div>
            <div className="movie-title-container">
                <h3>{props.movie.orginalniNaslov}</h3>
            </div>
            <div className="movie-time-container">
                <h3>{props.movie.datumPremijere}</h3>
            </div>
             <div className="movie-time-container">
                <h3>{props.movie.termini}</h3>
            </div>
            <div className="movie-button-container">
                <Link to={o}>Rezervisi</Link>
            </div> 
    </div>
}

export default Movie;