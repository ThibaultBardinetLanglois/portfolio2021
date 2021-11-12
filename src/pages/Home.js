import { useEffect } from 'react';
import useReactSimpleMatchMedia from "react-simple-matchmedia";

/*IMPORT COMPONENTS*/
import Navigation  from "../components/Navigation";
import DesktopShapes from "../components/shapes/DesktopShapes";
import MobileHomeTitle from "../components/dynamicTitle/MobileHomeTitle";
import TabletHomeTitle from "../components/dynamicTitle/TabletHomeTitle";
import DesktopHomeTitle from "../components/dynamicTitle/DesktopHomeTitle";
import ScrollArrow from '../components/ScrollArrow';
import SocialNetworks from "../components/SocialNetworks";

/*IMPORT ANIMATIONS*/
import { animBurgerMenu } from "../utilities/animations";
import {animShapes, animFirstRow, animSecondRow,animThirdRow, animBlackLetters, animBottomArrow, animSocialNetworks, /* animColoredLetters */} from '../utilities/animations';

const Home = () => {
    /*SHAPE*/
    const matchedDesktopShape = useReactSimpleMatchMedia('(min-width: 900px)');

    /*DYNAMIC TITLE*/
    const matchedMobileTitle = useReactSimpleMatchMedia('(max-width: 900px)');
    const matchedTabletTitle = useReactSimpleMatchMedia('(max-width: 1100px)');
    const matchedDesktopTitle = useReactSimpleMatchMedia('(min-width: 901px)');

    useEffect(() => {
        if(matchedDesktopShape && matchedDesktopTitle) {
            animShapes();
            /* animColoredLetters(); */
            animFirstRow();
            animSecondRow();
            animThirdRow();
            animBlackLetters(); 
        } else {
            animFirstRow();
            animSecondRow();
            animThirdRow();
            animBurgerMenu();
            animBlackLetters();
        }
        
        animBottomArrow();
        animSocialNetworks();
      }, [matchedDesktopShape, matchedDesktopTitle]);

    return (
        <div className="home-page page-content">
            <Navigation />

            <div className="home-page-block">
                {/*MOBILE*/}
                { matchedMobileTitle &&
                    <MobileHomeTitle />
                }
                {/*DESKTOP*/}
                { matchedDesktopShape && 
                    <DesktopShapes />    
                }
                { matchedDesktopTitle && 
                    <DesktopHomeTitle />
                }
            </div>

            <ScrollArrow bottom={"/about"} />
            <SocialNetworks />
            
        </div>
    )
}

export default Home;