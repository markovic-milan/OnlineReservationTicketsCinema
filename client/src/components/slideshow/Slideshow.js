import React ,{ useEffect } from 'react'
import './Slideshow.css';
import Movie from '../movie/Movie';
import Flickity from 'flickity';

function Slideshow(props) {

    useEffect(()=>{
          var elem = document.querySelector('.carousel1');
          var flkty = new Flickity( elem, {
            // options
            cellAlign: 'left',
            contain: true,
            freeScroll: true,
            lazyLoad: 3
          });  
      },[]);
    return (
        <div>
        <div class='carousel'>
            {props.movies.map((movie)=>{ return <div class="carousel-cell"><Movie movie={movie}/></div>})}                   
        </div>
        <div>
        <h1>Uskoro</h1>
        </div>
            <div class='carousel1'>
            {props.movies.map((movie)=>{ return <div class="carousel-cell"><Movie movie={movie}/></div>})}                   
        </div></div>
    )
}

export default Slideshow
