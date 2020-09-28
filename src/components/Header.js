import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/Header.css'

class Header extends React.Component {
    render() {
        return (
            <div  className="navbar">
             
              <Link className="Link" to="/"><button className="btn">Home </button> </Link> 
              <Link className="Link" to="/CardDesign"><button className="btn">Card Design </button> </Link> 
          <Link className="Link" to="/test"> <button className="btn">Test Yourself </button></Link>
          
          </div>
        );
    }
}

export default Header;