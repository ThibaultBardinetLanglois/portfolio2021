
import { NavLink } from "react-router-dom";

const ScrollArrow = (props) => {
    return(
        <div className="scroll-button-block">

            {props.top && 
                <NavLink to={props.top}>
                    <span id="scroll-top">&#10092;</span>
                </NavLink>
            }
                
            <p>Scroll</p>

            {props.bottom && 
                <NavLink to={props.bottom}>
                    <span id="scroll-bottom">&#10093;</span>
                </NavLink>
            }
            
            
        </div>
    )
}

export default ScrollArrow;