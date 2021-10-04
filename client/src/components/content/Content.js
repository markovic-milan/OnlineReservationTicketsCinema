import React,{useState, useEffect} from "react";
import Movie from "../movie/Movie";
import "./Content.css";
import axios from 'axios';
import Slideshow from "../slideshow/Slideshow";
import Flickity from 'flickity';

const Content = () => {
  console.log("Content");
    const [filmovi,setFilmovi] = useState([]);
    
  useEffect(()=>{
    axios.get('http://localhost:3001/filmovi').then((resp)=>{
      setFilmovi(resp.data);
      var elem = document.querySelector('.carousel');
      var flkty = new Flickity( elem, {
        // options
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        lazyLoad: 3
      });  
    });
  },[])

const isLoaded = filmovi.length > 0;
    return <div>
            <h1>Repertoar</h1>
            <div className="movies-container">
              {isLoaded ?  <Slideshow movies={filmovi}/> : <p>Loading...</p>}
            </div>

            {/* <div className="movies-container">
              <Slideshow klasa={"carousel2"} movies={filmovi}/>
            </div> */}                       
    </div>
}

export default Content;