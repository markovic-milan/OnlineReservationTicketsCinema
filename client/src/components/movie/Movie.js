import React from "react";
import './Movie.css';

import { Link  } from 'react-router-dom';

const Movie = (props) =>{
    console.log("Movie");
    console.log(props.movie.slika);
    var o = {
        pathname: `/filmovi/${props.movie.id}`,
        param: props.movie
    }

    return <div className="movie-container">
                <div className="movie-img-container">
                    <img src={props.movie.slika} alt=""></img>
                </div>
                <div className="movie-basic-container">
                    <div className="movie-title-container">
                        <h3>{props.movie.orginalniNaslov}</h3>
                    </div>
                    <div className="movie-time-container">
                    {(props.movie.zanr.split(",")).map((zanr)=>{
                            return <span className="termin-container">{zanr}</span>
                        })}
                    </div>
                    <div className="movie-time-container">
                        {(props.movie.termini.split(",")).map((termin)=>{
                            return <span className="termin-container">{termin}</span>
                        })}
                    </div>
                    <div className="movie-button-container">
                        <Link to={o}>Rezervisi</Link>
                    </div> 
                </div>
            </div>
}

export default Movie;