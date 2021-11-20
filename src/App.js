import { useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Loader from "./components/Loader";

import { Switch, Route, Redirect, useLocation} from 'react-router-dom';

import { animBlastShape, animGelatineShapes, animColoredLetters, animSocialNetworks, animHoverIcons } from './utilities/animations';


function App() {
  /*For using useLocation in App.js you have to move BrowserRouter in index.js, because useLocation is part of BrowserRouter*/
  let location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let animBlastShapeCallback;
    let animShapesCallback;
    let animColoredLettersCallback ;
    let animSocialNetworksCallback;
    if(loading) {
      setTimeout(() => {
        setLoading(!loading);
      }, 2900);
      
    } else {
      animBlastShapeCallback = animBlastShape();
      animShapesCallback = setInterval(animGelatineShapes, 5000);
      animColoredLettersCallback = setInterval(animColoredLetters, 10000);
      animSocialNetworksCallback = setInterval(animSocialNetworks, 15000);
    animHoverIcons();
    }
    
    

    return () => {
      if(animBlastShapeCallback) clearInterval(animBlastShapeCallback);
      if(animShapesCallback) clearInterval(animShapesCallback);
      if(animColoredLettersCallback) clearInterval(animColoredLettersCallback);
      if(animSocialNetworksCallback) clearInterval(animSocialNetworksCallback);
    }

  }, [location, loading]);
  
  return (
      <div className="app">
        {loading ? <Loader />
        :
          <div>
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
      }
      </div>
    
  );
}

export default App;
