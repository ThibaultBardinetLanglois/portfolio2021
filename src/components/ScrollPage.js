import { useEffect} from "react";
import useReactSimpleMatchMedia from 'react-simple-matchmedia';
import { useHistory } from 'react-router-dom';

const ScrollPage = () => {
    let history = useHistory();
    const matchedMobile = useReactSimpleMatchMedia('(min-width: 900px)');
    useEffect(() => {
        /* console.log("location => ", location, "history => ", history);
        console.log("Current url => ", window.location.href);
        console.log(window.location.origin); */
        
        const url = window.location.origin + "/";

        /* setTimeout(() => {
            window.location.href = "about";
        }, 2000); */

        const handleSrollLocation = (e) => {
            if(!matchedMobile) return;
            const wheelRouter = (previousPage, nextPage) => {
                if(e.wheelDeltaY > 0) {
                    setTimeout(() => { 
                        history.push(previousPage);
                    }, 200);
                } else if(e.wheelDeltaY < 0) {
                    setTimeout(() => {
                        history.push(nextPage);
                    }, 200);
                } 

            }
            
            switch(window.location.href.toString()) {
                case url:
                    wheelRouter("", "about");
                    break;
                case url + "about":
                    wheelRouter("", "work");
                    break;
                case url + "work":
                    wheelRouter("about", "contact");
                    break;
                case url + "contact":
                    wheelRouter("work", "contact");
                    break;
                default: 
                    console.log("nothing to scroll");
            } 
        } 

        window.addEventListener("wheel", handleSrollLocation);

        return () => {
            window.removeEventListener("wheel", handleSrollLocation);
        }

    }, [history, matchedMobile]);

    return null;

}

export default ScrollPage;
