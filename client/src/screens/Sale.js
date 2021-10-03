import React from 'react';
import axios from "axios";
import 'C:/Users/AcerAspireE5/Desktop/SmartCinemaV4/OnlineReservationTicketsCinema/client/src/components/seats/Seats.css';

import { useEffect, useState } from "react";
import fotelja from "C:/Users/AcerAspireE5/Desktop/SmartCinemaV4/OnlineReservationTicketsCinema/client/src/images/4.jpg"
import love from"C:/Users/AcerAspireE5/Desktop/SmartCinemaV4/OnlineReservationTicketsCinema/client/src/images/3.jpg"
import regular from "C:/Users/AcerAspireE5/Desktop/SmartCinemaV4/OnlineReservationTicketsCinema/client/src/images/1.jpg"
import vip from "C:/Users/AcerAspireE5/Desktop/SmartCinemaV4/OnlineReservationTicketsCinema/client/src/images/2.jpg"




function Sale() {
  const [listOfSjedista, setListOfSjedista] = useState([]);
  //let history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:3001/vrsteSjedista").then((response) => {
      setListOfSjedista(response.data);
    });
  }, []);


  let slika;
  



  return (
    
    <div className="uvod">U salama mozete pronaći različite vrste sjedišta:
        <div className="container"> 
    
      {listOfSjedista.map((value,key)=>{

        switch (value.naziv) {
          case "Regularna sjedista":
            slika=regular;
            break;
          case "VIP sjedista":
          slika=vip;
          break;
          case "Ljubavna sjedista":
            slika=love
            break;
          case "Fotelje":
            slika=fotelja;
            break;
            
        }
        return(
          <div className="item">
              <div className="title"> {value.naziv}</div>
              
              <div className="body"> {value.opis}  </div>
              
              <div className="wrapperImage">
                <img className="img" src={slika} width="550" height="300"></img>
              </div>
             
             
          </div>
        )
      })}
    </div>
    </div>
  );

}

export default Sale