import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


function App() {
  console.log(window.location.href);
  return (
    <Router>
      <div className="app">
      <div className="burger-menu">
        <div className="top-line line"></div>
        <div className="center-line line"></div>
        <div className="bottom-line line"></div>
      </div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/work" component={Work}/>
            <Route exact path="/contact" component={Contact}/>
            <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
