import React from 'react';
// import FlashCardsApi from "../api/FlashCardsApi";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from './Homepage' 
import CardDesign from './CardDesign' 
import Test from './Test' 
// import Card from './Card'

class App extends React.Component {

   

    render() {

        return (
            <BrowserRouter>
            <div>
              <Header />
              <Route exact path="/" component={Homepage} />
              <Route exact path="/cardDesign" component={CardDesign} />
              <Route exact path="/test" component={Test} />
            </div>
          </BrowserRouter>
        );
    }
}

export default App;