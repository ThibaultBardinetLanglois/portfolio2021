import { useEffect } from "react";

import ScrollPage from "../components/ScrollPage";
import Navigation  from "../components/Navigation";
import Shapes from "../components/shapes/Shapes";
import ScrollArrow from '../components/ScrollArrow';
import SocialNetworks from "../components/SocialNetworks";

import { animOthersTitle, animBottomArrow, animTopArrow, animBurgerMenu } from '../utilities/animations';

const Work = () => {
    useEffect(() => {
        
        animOthersTitle();
        animBottomArrow();
        animTopArrow();
        animBurgerMenu();
    }, [])


    return(
        <div className="work-page page-content">
            <ScrollPage />
            <Shapes />
            <Navigation />
            <div className="work-page-block">
                <h2 className="colored-title">
                    <span className="colored-letter letter-red">H</span>
                    <span>e</span>
                    <span>r</span>
                    <span>e</span>
                    <span className="colored-letter letter-yellow">i</span>
                    <span>s</span>
                    <span className="colored-letter letter-green">m</span>
                    <span>y</span>
                    <span className="colored-letter letter-blue">w</span>
                    <span>o</span>
                    <span>r</span>
                    <span>k</span>
                </h2>
            </div>
            <ScrollArrow top={"/about"} bottom={"/contact"} />
            <SocialNetworks />
        </div>
    )
}

export default Work;