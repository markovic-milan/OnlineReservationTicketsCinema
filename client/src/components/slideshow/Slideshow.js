import React from 'react'
import './Slideshow.css';
import Movie from '../movie/Movie';

function Slideshow(props) {
    return (
        <div class='carousel'>
            {props.movies.map((movie)=>{ return <div class="carousel-cell"><Movie movie={movie}/></div>})}                   
        </div>
    )
}

export default Slideshow
