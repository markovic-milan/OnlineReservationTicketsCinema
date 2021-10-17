import React, { useState } from "react";
import './SearchBar.css'

const SearchBar = (props) => {
    const [keyword, setKeyword] = useState("");

    // const filterFilms = props.movies[0].filter((movie) =>{
    //    return  movie.orginalniNaslov.toLowerCase().includes(keyword.toLowerCase())
    //  })


    return <div className="searchbar-container">
        <div className="searchbar-wrapper">
            <div className="searchbar">
                <input type="text" value="Pretraga" onChange={(e) => setKeyword(e.target.value)}/>
            </div>
        </div>
        <button className="search-button">  
            <div className="search-icon">
                <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
                    <g><path fill="#18181F" fillRule="evenodd" d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z" clipRule="evenodd"></path></g>
                </svg>
            </div>
        </button>
      
    </div>
}
export default SearchBar;