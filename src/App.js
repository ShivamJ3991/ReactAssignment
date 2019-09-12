import React,{Fragment} from 'react';
import './App.css';
import LoginComponent from './Components/LoginComponent';
import Home from './Components/Home';
import PrivateRoute from './Components/PrivateRoute';
import PlanetDetail from './Components/PlanetDetail';
import ErrorNotFound from './Components/ErrorNotFound.js';
import {  Route, Switch, BrowserRouter  } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
      <Switch>
          <Route exact path="/"  component={LoginComponent} />
          <PrivateRoute exact path="/home/" component={Home} />
          <PrivateRoute exact path="/planet-detail/:Id" component={PlanetDetail} />

        /* add 404 page */
        <Route path="*" component={ErrorNotFound} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
