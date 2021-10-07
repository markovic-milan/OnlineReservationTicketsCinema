import React,{useState, useEffect} from "react";
import "./Content.css";
import axios from 'axios';
import Slideshow from "../slideshow/Slideshow";
import Flickity from 'flickity';

const Content = (props) => {
    // const [filmovi,setFilmovi] = useState([]);
  useEffect(()=>{
    // axios.get('http://localhost:3001/filmovi').then((resp)=>{
    //   setFilmovi(resp.data);
    //   console.log("CONTENT:" + filmovi);
      var elem = document.querySelector('.carousel');
      var flkty = new Flickity( elem, {
        // options
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        lazyLoad: 3
      });  
    });
  // },[])

const isLoaded = props.filmovi.length > 0;

    return <div>
            <div className="movies-container">
              {isLoaded ?  <Slideshow movies={props.filmovi} selected/> : <p>Loading...</p>}
            </div>                
    </div>
}

export default Content;