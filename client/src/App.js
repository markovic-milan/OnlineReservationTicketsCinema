import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router,Route,Switch, Link} from 'react-router-dom';
import Pocetna from './screens/Pocetna';
import Sale from './screens/Sale';
import Content from './components/content/Content';
import Prijava from './screens/Prijava';
import Registracija from './screens/Registracija'
import BottomNav from './components/BottomNav/BottomNav';
import Detalji from './screens/Detalji';
function App() {

  return <Router> 
      <div className="layout">
        <Navbar/>
        <Switch>
          <Route path="/pocetna" exact component={Pocetna}/>
          <Route path="/" exact component={Pocetna}/>
          <Route path="/prijava" exact component={Prijava}/>
          <Route path="/registracija" exact component={Registracija}/>
          <Route path="/sale" exact component={Sale}/>
          <Route path="/details" exact component={Detalji}/>
        </Switch>


        
      <div className="spacer"></div>
      <BottomNav></BottomNav>
      </div>;
    </Router>
}

export default App;
