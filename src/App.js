import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

import { Switch, Route, Redirect, useLocation} from 'react-router-dom';

import { animBlastShape, animGelatineShapes, animColoredLetters, animSocialNetworks, animHoverIcons } from './utilities/animations';


function App() {
  /*For using useLocation in App.js you have to move BrowserRouter in index.js, because useLocation is part of BrowserRouter*/
  let location = useLocation();
  useEffect(() => {
    let animBlastShapeCallback = animBlastShape();
    let animShapesCallback = setInterval(animGelatineShapes, 5000);
    let animColoredLettersCallback = setInterval(animColoredLetters, 10000);
    let animSocialNetworksCallback = setInterval(animSocialNetworks, 15000);
    animHoverIcons();

    return () => {
      clearInterval(animBlastShapeCallback);
      clearInterval(animShapesCallback);
      clearInterval(animColoredLettersCallback);
      clearInterval(animSocialNetworksCallback);
    }

  }, [location]);
  
  return (
    
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
    
  );
}

export default App;
