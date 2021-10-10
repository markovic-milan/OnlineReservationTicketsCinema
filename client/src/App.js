import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NavbarLogged from "./components/navbarLogged/NavbarLogged";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Pocetna from "./screens/Pocetna";
import Sale from "./screens/Sale";
import Prijava from "./screens/Prijava";
import Registracija from "./screens/Registracija";
import BottomNav from "./components/BottomNav/BottomNav";
import Detalji from "./screens/Detalji";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import * as constants from "./constants/constants";
import React,{ useState, useEffect } from "react";
import axios from "axios";
import Flickity from 'flickity';

function filterFilm(key){
      const elem = document.querySelector('.carousel');
      var flkty = Flickity.data(elem);      

      if(flkty!==undefined && flkty!==null){
        let length = flkty.cells.length;
        for(let i=0;i<length;i++){
          if((flkty.getCellElements()[i]).getElementsByTagName('h3')[0].innerHTML.trim().toLowerCase().startsWith(key.toLowerCase())){
            (flkty.getCellElements()[i]).className = "carousel-cell"
          }else{
            (flkty.getCellElements()[i]).className = "nevidljiv"
          }
        }
        flkty.select(0,false,false)
        flkty.reloadCells();
      }

      const elem1 = document.querySelector('.carousel1');
      var flkty1 = Flickity.data(elem1);      

      if(flkty1!==undefined && flkty!==null){
        let length = flkty1.cells.length;
        for(let i=0;i<length;i++){
          if((flkty1.getCellElements()[i]).getElementsByTagName('h3')[0].innerHTML.trim().toLowerCase().startsWith(key.toLowerCase())){
            (flkty1.getCellElements()[i]).className = "carousel-cell"
          }else{
            (flkty1.getCellElements()[i]).className = "nevidljiv"
          }
        }
        flkty1.select(0,false,false)
        flkty1.reloadCells();
      }
  }

function App() {

  const [filmovi,setFilmovi] = useState([]);
 
  useEffect(()=>{
    axios.get('http://localhost:3001/filmovi').then((resp)=>{
      setFilmovi(resp.data);
    });
  },[]);

  const user = JSON.parse(localStorage.getItem(constants.ACCOUNT_KEY));
  const isLoaded = filmovi.length > 0;

return <Router>
     {user ? (isLoaded? <div className="layout">
            <NavbarLogged  updateData={filterFilm}/>
            <Switch>
              <Route path="/pocetna" exact><Pocetna data={filmovi}/></Route>
                <Route path="/" exact><Pocetna data={filmovi}/></Route>
              <Route path="/sale" exact component={Sale} />
              <Route path="/filmovi/*" exact component={Detalji} />
            </Switch>
            <BottomNav />
            <ToastContainer hideProgressBar></ToastContainer>
          </div> : <span/>) 
          : 
          (isLoaded ? <div className="layout">
          <Navbar updateData={filterFilm}/>
            <Switch>
            <Route path="/pocetna" exact><Pocetna data={filmovi}/></Route>
                <Route path="/" exact><Pocetna data={filmovi}/></Route>
              <Route path="/prijava" exact component={Prijava} />
              <Route path="/registracija" exact component={Registracija} />
              <Route path="/sale" exact component={Sale} />
              <Route path="/filmovi/*" exact component={Detalji} />
            </Switch>
          <BottomNav />
          <ToastContainer hideProgressBar></ToastContainer>
        </div> : <span/>)}
  </Router>
}

export default App;