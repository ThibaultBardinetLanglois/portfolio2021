import { useEffect } from "react";

import Navigation  from "../components/Navigation";
import ScrollArrow from '../components/ScrollArrow';

import { animBurgerMenu } from "../utilities/animations";

const Work = () => {
    useEffect(() => {
        animBurgerMenu();
    }, [])


    return(
        <div className="work-page page-content">
            <Navigation />
            <div className="work-page-block">
                <h2>
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
        </div>
    )
}

export default Work;