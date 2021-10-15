import React from "react";
import SearchBar from "../searchbar/SearchBar";
import './Navbar.css';

const Navbar = (props) => {

        window.onclick = (event)=>{
        console.log(event.srcElement);
        if(!(event.srcElement.className === 'hamburger' || event.srcElement.parentElement.className === 'hamburger') && 
        document.getElementsByClassName("dropdown-container")[0].style.display === 'block'){
            console.log("Zatvori");
            document.getElementsByClassName("dropdown-container")[0].style.display='none';
        }
    };

    function myfunc()
    {
        if(document.getElementsByClassName("dropdown-container")[0].style.display === 'block'){
            document.getElementsByClassName("dropdown-container")[0].style.display='none';
        }else{
            var cont = document.getElementsByClassName("dropdown-container")[0];
            cont.style.display = "block";
        }
    }
    const MojStil = {
        stroke: 'rgb(167, 163, 204)', 
        fill: 'rgb(100, 100, 100)',
        strokeWidth: 8, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fillRule: 'nonzero', opacity: 1
    };

    return <nav className="nav-container">
            <div className="navbar">
                <div className="logo-container">
                <svg version="1.1" height="100%" viewBox="0 0 303 217" xmlSpace="preserve">
                    <g transform="matrix(1.9 0 0 1 113.98 155)">
                    <polygon style={MojStil}  points="-50,-50 -50,50 50,50 50,-50 "/>
                    </g>
                    <g transform="matrix(1.25 0 0 1.25 54 55)">
                    <circle style={MojStil}  cx="0" cy="0" r="40"/>
                    </g>
                    <g transform="matrix(1.25 0 0 1.25 166 54)">
                    <circle  style={MojStil}  cx="0" cy="0" r="40"/>
                    </g>
                    <g transform="matrix(0 1.18 1.02 0 256.37 154.5)">
                    <polygon style={MojStil} points="0,-42.5 50,42.5 -50,42.5 "/>
                    </g>
                </svg>
                </div>
                <div className="filler1"></div>
                <SearchBar updateData={props.updateData}/>  
                <div className="filler2"></div>
                <div className="link-container">
                    <ul>
                        <li><a href="/pocetna">Početna</a></li>
                        <li><a href="/prijava"> Prijava</a></li>
                        <li><a href="/registracija">Registracija</a></li>
                        <li><a href="/sale">Sale</a></li>
                    </ul>
               <button onClick={myfunc} class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>    
            <div className="dropdown-container">
                <div><a href="/pocetna">Početna</a></div>
                <div><a href="/prijava">Prijava</a></div>
                <div><a href="/registracija">Registracija</a></div>
                <div><a href="/sale">Sale</a></div>
            </div>
    </nav>
}

export default Navbar;