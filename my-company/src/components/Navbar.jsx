import { Link } from "react-router-dom";

function Navbar() {
    const navStyle = {
        backgroundColor:'#D2B48C',
        padding:'15px 20px',
        display:'flex',
        justifyContent:'center',
        boxShadow:'0 2px 4px rgba(0,0,0,0.1)'
    };
    const linkStyle = {
        color:'#8B4513',
        textDecoration:'none',
        margin:'0 15px',
        fontSize:'1.1em',
        fontWeight:'bold'
    };
    return(
        <nav style={navStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/about" style={linkStyle}>About Us</Link>
            <Link to="/services" style={linkStyle}>Services</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
        </nav>
    );
}

export default Navbar;