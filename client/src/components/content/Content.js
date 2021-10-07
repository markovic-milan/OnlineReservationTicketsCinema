import React,{useState, useEffect} from "react";
import "./Content.css";
import axios from 'axios';
import Slideshow from "../slideshow/Slideshow";
import Flickity, { data } from 'flickity';
import SearchBar from "../searchbar/SearchBar";
import Movie from "../movie/Movie";

const Content = () => {
    const [filmovi,setFilmovi] = useState([]);
    
    useEffect(()=>{
      axios.get('http://localhost:3001/filmovi').then((resp)=>{
        setFilmovi(resp.data);
        console.log(resp.data[0]);
        var elem = document.querySelector('.carousel');
        var flkty = new Flickity( elem, {
          // options
          cellAlign: 'left',
          contain: true,
          freeScroll: true,
          lazyLoad: 3
        });  
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
    
    const isLoaded = filmovi.length > 0;
    console.log("PROMJENA" + filmovi[0]);
    return <div>
            <div className="movies-container">              
              {/* <div className="searchbar-container">
                <div className="searchbar-wrapper">
                    <div className="searchbar">
                        <input placeholder="Pretraži" type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
                    </div>
                </div>
                <button className="search-button">  
                    <div className="search-icon">
                        <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
                            <g><path fill="#18181F" fillRule="evenodd" d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z" clipRule="evenodd"></path></g>
                        </svg>
                    </div>
                </button>
              </div> */}
              {isLoaded ?  (  <div>
            <div className="carousel-container">
                <h1>Repertoar</h1>
                 <div class='carousel'>
                    {filmovi[0].map((movie)=>{ return <div class="carousel-cell" key={movie.id}><Movie movie={movie}/></div>})}                   
                </div>
            </div>
            <div className="carousel-container">
                <h1>Uskoro</h1>      
                <div class='carousel1'>
                    {filmovi[1].map((movie)=>{ return <div class="carousel-cell"  key={movie.id}><Movie movie={movie}/></div>})}                   
                </div> 
            </div>
        </div>) : <p>Loading...</p>}
            </div>                
    </div>
}

export default Content;