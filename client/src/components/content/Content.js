import React,{useState, useEffect} from "react";
import Movie from "../movie/Movie";
import "./Content.css";
import axios from 'axios';

const Content = () => {
    const [filmovi,setFilmovi] = useState([]);
    const isLoaded = filmovi.length > 0;
  useEffect(()=>{
    axios.get('http://localhost:3001/filmovi').then((resp)=>{
      setFilmovi(resp.data);
    });
  },[])

    return <div>
            <h1>Repertoar</h1>
        <div className="movies-container">
            {isLoaded ? filmovi.map((movie)=>{return <Movie key={movie} movie={movie}/>}) : <p>Loading</p>}
        </div>
    </div>
}

export default Content;