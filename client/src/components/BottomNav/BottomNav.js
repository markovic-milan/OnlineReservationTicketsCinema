
import './BottomNav.css';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import ikona from "C:/Users/AcerAspireE5/Desktop/SmartCinemaV4/OnlineReservationTicketsCinema/client/src/images/ikona2.png"


function BottomNav() {
    const [listOfKina, setListOfKina] = useState([]);
    //let history = useHistory();
  
    useEffect(() => {
      axios.get("http://localhost:3001/kino").then((response) => {
          setListOfKina(response.data);
      });
    }, []);
  
    return (
      <div className="footer"> 

        <div className="leftSide">
            <div className="wrapperIcon"> 
                <img className="icon" src={ikona} width="110" height="110"></img>
            </div>
        </div>

        {listOfKina.map((value,key)=>{
          return(
            <div className="rightSide">
                <div className="container">
                    <div className="adresa"> Adresa: {value.adresa}</div> 
                    <div className="email"> Email: {value.email}</div> 
                    <div className="telefon"> Telefon: {value.brojTelefona}</div> 
                    <div className="adresa"> Fax telefon: {value.faxTelefon}</div> 
                </div>
            </div>
          )
        })}
      </div>
      
    );
  
  }
  
  export default BottomNav
