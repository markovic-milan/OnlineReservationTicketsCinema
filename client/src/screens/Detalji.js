import React ,{ useState } from 'react'
import MovieInfo from '../components/info/MovieInfo'

function Detalji(props) {
    return (
        <div  className="content-container">
          <MovieInfo movie={props.location.param}/>
        </div>
    )
}

export default Detalji
