import React,{useState, useEffect} from "react";
import "./Content.css";
import Slideshow from "../slideshow/Slideshow";
import Flickity from 'flickity';

const Content = (props) => {
  useEffect(()=>{
      var elem = document.querySelector('.carousel');
      var flkty = new Flickity( elem, {
        // options
        cellAlign: 'left',
        freeScrollFriction: 0.03,
        contain: true,
        freeScroll: false,
        lazyLoad: 3
      });
    },[]);
  

    return <div>
            <div className="movies-container">
              <Slideshow movies={props.filmovi} selected/>
            </div>                
    </div>
}

export default Content;