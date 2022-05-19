import React, { useState, useEffect } from 'react';
import {FaTwitterSquare} from 'react-icons/fa';
import WelcomeMessage from './WelcomeArray';
import "./WelcomePage.css";

const WelcomePage = ({onRouteChange}) => {
  const [index, setIndex] = useState(Math.floor(Math.random() * WelcomeMessage.length));
  const {welMessage} = WelcomeMessage[index];
  console.log(index)

  const checkNumber = (number) => {
    if (number > WelcomeMessage.length - 1) {
      return 0;
    }
    if (number < 0) {
      return WelcomeMessage.length - 1;
    }
    return number;
  };
 
  useEffect (() => {
    let randomMsg = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * WelcomeMessage.length);
      if (randomNumber === index) {
        randomNumber = index + 1;
        console.log(index)
      }
      setIndex(checkNumber(randomNumber));
    }, 100000);
    return () => {
      clearInterval(randomMsg)
    }
  }, [index]);

  const twitterHandle = function Open() {
    window.open("https://twitter.com/DailyReadNow", "_blank");
};
  
  return (
    <div className='Welcome'>
      <p className='f3 fw9 tc mb0 w8 mt5 ml1 mr1'>"{welMessage}"</p>
        <div className='tc ma0 pa2'>
             <button className='button fw9 black br3 ma0 pa1 grow' onClick={()=>{onRouteChange("home")}}>
              Get In!
             </button>    
       </div>
      <div style={{display:"flex", justifyContent:"center"}}>
             <div className='mt6 pt6 pa0 fw9 twitter w5'>
                 <h4 className='tc fw9 f5' onClick={twitterHandle}>Feedback@<FaTwitterSquare></FaTwitterSquare>DailyRead</h4>
           </div>
      </div> 
   </div>
  )
}

export default WelcomePage;
