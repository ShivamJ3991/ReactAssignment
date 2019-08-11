import React,{Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import LoginComponent from './Components/LoginComponent'
import Home from './Components/Home'
import Footer from './Components/Footer';
import PlanetDetail from './Components/PlanetDetail';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    
    <Fragment>
        <Router>
          <Route exact path="/"  component={LoginComponent} />
          <Route exact path="/home/" component={Home} />
          <Route exact path="/planet-detail/:Id" component={PlanetDetail} />
       </Router>
    </Fragment>
  );
}

export default App;
