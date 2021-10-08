import './BottomNav.css';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import ikona from "./ikona2.png"


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
                  <img className="icon" src={ikona}></img>
              </div>
          </div>

          {listOfKina.map((value)=>{
            return(
              <div key={value.id} className="rightSide">
                  <div className="container">
                      <p className="adresa"> Adresa: {value.adresa}</p> 
                      <p className="email"> Email: {value.email}</p> 
                      <p className="telefon"> Telefon: {value.brojTelefona}</p> 
                      <p className="adresa"> Fax telefon: {value.faxTelefon}</p> 
                  </div>
                  
              </div>
            )
          })}<div>
                    <p className="copyright">Copyright 2021 © SmartCinema. Sva prava zadržana.</p>
                  </div>
        </div>
    );
  }
  
  export default BottomNav