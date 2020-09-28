import React from 'react';
import '../Styles/TestCard.css'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class TestCard extends React.Component {
    state = { isFlipped :false}

 
   

    render() {
        
        return (
           
            <div className="flipCard-container"> 
                <Flippy
    flipOnHover={false}
    flipOnClick={true} 
    flipDirection="horizontal" // horizontal or vertical
    // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '200px', height: '250px' }}
  >
    <FrontSide
      style={{
        backgroundColor: 'grey', color:`white`
      }}
    >
     {this.props.question}
    </FrontSide>
    <BackSide
      style={{ backgroundColor: 'lightgrey'}}>
       {this.props.answer}
    </BackSide>
    <button className="reveal-btn" onClick={(r)=> this.flippy = r}>reveal answer</button>
    </Flippy>
   
  
  
   
            </div>
        );
    }
}

export default TestCard;