import { useEffect } from "react";

import Navigation  from "../components/Navigation";
import ScrollArrow from '../components/ScrollArrow';

import { animBurgerMenu } from "../utilities/animations";

const Contact = () => {
    useEffect(() => {
        animBurgerMenu();
    }, [])


    return (
        <div className="contact-page page-content">
            <Navigation />
            <div className="contact-page-block">
                <h2>
                    <span className="colored-letter letter-red">C</span>
                    <span>o</span>
                    <span>n</span>
                    <span>t</span>
                    <span>a</span>
                    <span>c</span>
                    <span>t</span>
                    <span className="colored-letter letter-yellow">m</span>
                    <span>e</span>
                </h2>
            </div>
            
            <ScrollArrow top={"/work"} />
        </div>
    )
}

export default Contact;