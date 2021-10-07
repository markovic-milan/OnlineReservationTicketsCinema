import React ,{ useEffect } from 'react'
import './Slideshow.css';
import Movie from '../movie/Movie';
import Flickity from 'flickity';

function Slideshow(props) {
    // console.log("Slideshow: "+ props.movies.repertoar);
    const uskoroNiz = props.movies[1];
    const repertoarNiz = props.movies[0];

    useEffect(()=>{
        var elem = document.querySelector('.carousel');
        var flkty = new Flickity( elem, {
          // options
          cellAlign: 'left',
          contain: true,
          freeScroll: true,
          lazyLoad: 3
        });  
    },[]);

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
            <div className="carousel-container">
                <h1 className="naslov">Repertoar</h1>
                 <div class='carousel'>
                    {repertoarNiz.map((movie)=>{ return <div class="carousel-cell"><Movie movie={movie}/></div>})}                   
                </div>
            </div>
            <div className="carousel-container">
                <h1  className="naslov">Uskoro</h1>      
                <div class='carousel1'>
                    {uskoroNiz.map((movie)=>{ return <div class="carousel-cell"><Movie movie={movie}/></div>})}                   
                </div> 
            </div>
        </div>
    )
}

export default Slideshow
