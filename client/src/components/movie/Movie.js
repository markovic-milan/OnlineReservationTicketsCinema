import React from "react";
import './Movie.css';

import { Link  } from 'react-router-dom';

const Movie = (props) =>{
    var o = {
        pathname: `/filmovi/${props.movie.id}`,
        param: props.movie
    }

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
}

export default Movie;