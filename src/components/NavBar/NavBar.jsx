import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/art">Art</Link></li>
                <li><Link to="/art">Gallery</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
