import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return(
        
        <div className="navigation">
            <ul>
                <NavLink to="/" exact activeClassName="nav-active">Home</NavLink>
                <NavLink to="/about" exact activeClassName="nav-active">About</NavLink>
                <NavLink to="/work" exact activeClassName="nav-active">My work</NavLink>
                <NavLink to="/contact" exact activeClassName="nav-active">Contact</NavLink>
            </ul>
        </div>
    )
}

export default Navigation;