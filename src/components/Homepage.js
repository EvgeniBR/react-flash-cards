import React from "react";
import '../Styles/HomePage.css'
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return(
       <div className="body-container">
         <div className="iframe">
         <iframe title="video explenation" width="727" height="409" src="https://www.youtube.com/embed/p3-o0pxDrL0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>"
         </div>
         <div className="btn-container" >
           <p> Your learning jurney <br/> starts here: </p>
          <Link className="Link" to="/CardDesign"><button className="btn">Costumize Cards </button> </Link> 
          <Link className="Link" to="/test"> <button className="btn">Test Yourself </button></Link>
         </div>
         </div>
    )
  }
}

export default HomePage;
