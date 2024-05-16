import React from 'react';
import Header from './components/Header';

import Home from './Pages/Home/Home';
import Noble from './Pages/Noble/Noble';
import Laviq from './Pages/Laviq/Laviq';
import Esse from './Pages/Esse/Esse';
import Address from './Pages/Address/Address';


import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Router>
        <div>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Noble" component={Noble} />
            <Route path="/Laviq" component={Laviq} />
            <Route path="/Esse" component={Esse} />
            <Route path="/Address" component={Address} />
          </Switch>
        <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
