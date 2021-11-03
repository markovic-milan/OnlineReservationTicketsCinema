import React, {useState, useEffect} from 'react'
import axios from "axios";

function Kino(props) {
    const [sjedista, setSjedista] = useState([]);
    const [karta, setKarte] = useState([]);

    const selectedSeats = [];
    const id = props.movie;
    var sum = 0;

    useEffect(() => {
      axios.get(`http://localhost:3001/karte/filmovi/${id}`).then((resp) => {
        setKarte(resp.data);
      });
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3001/Sjedista/1").then((resp) => {
          setSjedista(resp.data);
        });
      }, []);
      
    const isLoadedSeats = sjedista.length > 0;
    const seatHandler = (event) => {
        if (event.target.innerHTML === "X") {
        } else {
          if (event.target.style.background === "rgb(3, 255, 221)") {
            event.target.style.background = "rgb(172, 255, 46)";
            const index = selectedSeats.indexOf(event.target.innerHTML);
            if (index > -1) {
              selectedSeats.splice(index, 1);
              sum -= 5;
              document.getElementById("ukupno").innerHTML = sum + ".00 KM";
            }
          } else {
            sum += 5;
            event.target.style.background = "rgb(3, 255, 221)";
            selectedSeats.push(event.target.innerHTML);
            document.getElementById("ukupno").innerHTML = sum + ".00 KM";
          }
          document.getElementById("seats-numbers").value = selectedSeats;
        }
    };

    return (
        <div className="grid-container-inner"> {sjedista.map((sjediste) => {
      var brojac = 0;

      karta.forEach((karta) => {
        
        if (sjediste.broj === karta.brojSjedista) {
          const vr = document.getElementById("time").value.trim();
          console.log(vr);
          brojac = 1;
        }
      });

      if (brojac) {
        return (
          <div className="grid-item zauzeto">
            <button onClick={seatHandler} className="zauzeto">
              X
            </button>
          </div>
        );
      } else
        return (
          <div className="grid-item slobodno">
            <button onClick={seatHandler}>{sjediste.id}</button>
          </div>
        );
    })
  }
        </div>
    )
}

export default Kino
