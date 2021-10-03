import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router,Route,Switch, Link} from 'react-router-dom';
import Pocetna from './screens/Pocetna';
import Sale from './screens/Sale';
import Content from './components/content/Content';
import Prijava from './screens/Prijava';
import Registracija from './screens/Registracija'
import BottomNav from './components/BottomNav/BottomNav';

function App() {
  return <div className="layout">
    
    <Router>
      
      <Navbar></Navbar>
      <Switch>
        <Route path="/pocetna" exact component={Pocetna}/>
        <Route path="/" exact component={Pocetna}/>
        <Route path="/prijava" exact component={Prijava}/>
        <Route path="/registracija" exact component={Registracija}/>
        <Route path="/sale" exact component={Sale}/>

        
      </Switch>
      
      
      <div className="spacer"></div>
      <BottomNav></BottomNav>
    </Router>
  </div>;
}

export default App;
