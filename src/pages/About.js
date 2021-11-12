import { useEffect } from 'react';

import { animBurgerMenu } from "../utilities/animations";

import Navigation  from "../components/Navigation";
import ScrollArrow from '../components/ScrollArrow';
import SocialNetworks from "../components/SocialNetworks";

const About = () => {
    useEffect(() => {
        animBurgerMenu();
    }, [])
    
  
    return (
        <div className="about-page  page-content">
            <Navigation />
            <div className="about-page-block">
                <h2>
                    <span className="colored-letter letter-red" >M</span>
                    <span>e</span>
                    <span>,</span>
                    <span className="colored-letter letter-yellow">m</span>
                    <span>y</span>
                    <span>s</span>
                    <span>e</span>
                    <span>l</span>
                    <span>f</span>
                    <span className="colored-letter letter-green">a</span>
                    <span>n</span>
                    <span>d</span>
                    <span className="colored-letter letter-blue">I</span>
                </h2>
                <div className="about-page-paragraphe">
                    <p>
                        I’m a full-stack junior developer living in the Parisian suburbs and searching for a full time position in 2021.
                    </p>
                    <p>
                        My training focused on php and the Symfony framework. I then learned to use React with Express in order
                        to adapt myself to the most used technologies on the web.
                    </p>
                    <p>
                        React was a big revelation for me and I want to progress as much as possible with this library then also use 
                        Vue.js which is a rising technology at the moment.
                    </p>
                    <p>
                        I like to conceptualize and develop ergonomic interfaces with a clean and modern design, for that Sass and Figma are my 
                        friend.
                    </p>
                </div>
            </div>
            
            
            <ScrollArrow top={"/"} bottom={"/work"} />
            <SocialNetworks />
        </div>
    )
}

export default About;