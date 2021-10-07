import React from "react";
import './Movie.css';

import { Link  } from 'react-router-dom';

const Movie = (props) =>{
    console.log("Movie");
    console.log(props.movie);
    var o = {
        pathname: `/filmovi/${props.movie.id}`,
        param: props.movie
    }

<<<<<<< HEAD
    return <Link to={o}>
                <div className="movie-container">
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
                        {props.movie.termini !== undefined ? (<div className="movie-time-container">
                            {(props.movie.termini.split(",")).map((termin)=>{
                                return <span className="termin-container">{termin}</span>
                            })}
                        </div>) : <span/>}
                      
                        <div className="movie-button-container"><p className="txt">Detalji</p></div> 
                    </div>
                </div>
            </Link>
=======
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
>>>>>>> newBranch02
}

export default Movie;