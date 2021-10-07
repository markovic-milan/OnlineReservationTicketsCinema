import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router,Route,Switch, Link} from 'react-router-dom';
import Pocetna from './screens/Pocetna';
import Sale from './screens/Sale';
import axios from 'axios';
import Content from './components/content/Content';
import Prijava from './screens/Prijava';
import Registracija from './screens/Registracija'
import BottomNav from './components/BottomNav/BottomNav';
import Detalji from './screens/Detalji';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { ToastContainer } from "react-toastify";

function App() {
  const [filmovi,setFilmovi] = useState([]);
 
  useEffect(()=>{
    axios.get('http://localhost:3001/filmovi').then((resp)=>{
      setFilmovi(resp.data);console.log(resp.data);})
  },[])

  return <Router> 
    {filmovi.length > 0 ? 
      (<div className="layout">
        <Navbar filmovi={filmovi}/>
        <Switch>
          <Route path="/pocetna" exact component={()=>{return <Pocetna filmovi={filmovi}/>}}/>
          <Route path="/" exact component={Pocetna}/>
          <Route path="/prijava" exact component={Prijava}/>
          <Route path="/registracija" exact component={Registracija}/>
          <Route path="/sale" exact component={Sale}/>
          <Route path="/filmovi/*" exact component={Detalji}/>
        </Switch>
        <BottomNav/>
        <ToastContainer hideProgressBar></ToastContainer>
      </div>) : <p>Loading...</p>}
     
    </Router>
}

export default App;
