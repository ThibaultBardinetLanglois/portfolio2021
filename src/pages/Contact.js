import { useEffect } from "react";

import ScrollPage from "../components/ScrollPage";
import Navigation  from "../components/Navigation";
import Shapes from "../components/shapes/Shapes";
import ScrollArrow from '../components/ScrollArrow';
import SocialNetworks from "../components/SocialNetworks";
import ContactForm from "../components/ContactForm";

import { animOthersTitle, animTopArrow, animBurgerMenu } from '../utilities/animations';

const Contact = () => {

    useEffect(() => {
        animOthersTitle();
        animTopArrow();
        animBurgerMenu();
    }, [])


    return (
        <div className="contact-page page-content">
            <ScrollPage />
            <Shapes />
            <Navigation />
            <div className="contact-page-block">
                <h2 className="colored-title">
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
                <ContactForm />
            </div>
            
            <ScrollArrow top={"/work"} />
            <SocialNetworks />
        </div>
    )
}

export default Contact;