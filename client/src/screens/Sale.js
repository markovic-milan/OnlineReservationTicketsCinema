import React from "react";
import axios from "axios";
import "../components/seats/Seats.css";
import { useEffect, useState } from "react";
import fotelja from "../components/seats/4.jpg";
import love from "../components/seats/3.jpg";
import regular from "../components/seats/1.jpg";
import vip from "../components/seats/2.jpg";

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
    <div className="uvod">
      U salama možete pronaći različite vrste sjedišta
      <div className="container">
        {listOfSjedista.map((value, key) => {
          switch (value.naziv) {
            case "Regularna sjedista":
              slika = regular;
              break;
            case "VIP sjedista":
              slika = vip;
              break;
            case "Ljubavna sjedista":
              slika = love;
              break;
            case "Fotelje":
              slika = fotelja;
              break;
          }
          return (
            <div className="sala-container">
              <p> </p>
              {<p></p>}
              <div className="item">
                <div className="title"> {value.naziv}</div>
                <div className="body"> {value.opis} </div>
                <div className="filler1"></div>
                <div className="wrapper-image">
                  <img className="img" src={slika}></img>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sale;
