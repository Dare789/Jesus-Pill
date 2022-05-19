import React,  { useState } from 'react';
import Greetings from '../Components/Greetings/Greetings';
import DailyDose from '../Components/DailyDose/DailyDose';
import WelcomePage from '../Components/WelcomePage/WelcomePage';
import Share from '../Components/Share/Share';
import TodayDate from '../Components/TodayDate/TodayDate';
import Helmet from "react-helmet"
import "./App.css";

const App = () => {
 const [ route, setRoute ] = useState("Welcome");

 const onRouteChange = (route) => {
     return setRoute(route)
 }

 return(
    <div>
      <Helmet>
        <title>Daily Read</title>
          <meta name="Daily Read" content="The Ultimate Christian App"/>
        </Helmet>
       {route === "Welcome" ?
        <div>
           <WelcomePage onRouteChange={onRouteChange}/>
       </div>
       :
        <div>
             <Greetings/>
             {/* <Bible/> */}
             <TodayDate/>
             <DailyDose/>
             <Share/> 
        </div>
        }
    </div>
  )
}

export default App;