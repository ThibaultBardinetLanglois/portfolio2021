import { useEffect } from 'react';

/*IMPORT COMPONENTS*/
import ScrollPage from "../components/ScrollPage";
import Navigation  from "../components/Navigation";
import Shapes from "../components/shapes/Shapes";
import ScrollArrow from '../components/ScrollArrow';
import SocialNetworks from "../components/SocialNetworks";

/*IMPORT ANIMATIONS*/

import { animHomeTitle, animBottomArrow, animBurgerMenu } from '../utilities/animations';

const Home = () => {

    useEffect(() => {
        animBottomArrow();
        animHomeTitle();
        animBurgerMenu();
      }, []);

    return (
        <div className="home-page page-content">
            <ScrollPage />
            <Shapes />
            <Navigation />

            <div className="home-page-block">
                <h1 className="colored-title home-title">
                    <span className="colored-letter letter-red" >H</span>
                    <span>e</span>
                    <span>l</span>
                    <span>l</span>
                    <span>o</span>
                    <span>,</span>
                    <br></br>
                    <span className="colored-letter letter-yellow">I</span>
                    <span>'</span>
                    <span>m</span>
                    <span className="colored-letter letter-blue">T</span>
                    <span>h</span>
                    <span>i</span>
                    <span>b</span>
                    <span>a</span>
                    <span>u</span>
                    <span>l</span>
                    <span>t</span>
                    <br></br>
                    <span className="colored-letter letter-green">w</span>
                    <span>e</span>
                    <span>b</span>
                    <span>d</span>
                    <span>e</span>
                    <span>v</span>
                    <span>e</span>
                    <span>l</span>
                    <span>o</span>
                    <span>p</span>
                    <span>e</span>
                    <span>r</span>
                </h1>
            </div>

            <ScrollArrow bottom={"/about"} />
            <SocialNetworks />
            
        </div>
    )
}

export default Home;