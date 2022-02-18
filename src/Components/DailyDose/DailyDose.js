import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import "./DailyDose.css";
import Scripture from './Scripture';


const DailyDose = () => {
  const d = new Date()
  let todayDate = d.getDate() - 1
 
    const [index, setIndex] = useState(todayDate);
    const {Script, scriptLoc, SayPrayers, TodaysAffirm, date} = Scripture[index]
    const [readMore, setReadMore] = useState(false)
    const [readLarge, setReadLarge] = useState(false)
     
    useEffect(()=> {
      const d = new Date()
      let todayDate = d.getDate() - 1

      function dateArray(){
        setIndex((index) => {
          let newIndex = todayDate;
          return(newIndex);
        });
      }
      return dateArray()
    }, [])

    const checkNumber = (number) => {
      if (number > Scripture.length - 1) {
        return number;
      }
      if (number < 0) {
        return 0;
      }
      return number;
    };

  const prevDays = () => {
   setIndex((index)=> {
      let newIndex = index - 1;
         return checkNumber(newIndex)
  })
};

 const nextDays = () => {
   setIndex((index)=> {
     let newIndex = index + 1;
     if(index === todayDate){
        return checkNumber(index)
     }
        return checkNumber(newIndex)
   })
};
  
return(
     <div>
        <div>
           <div className='todayDate ma5 mb0 '>
              <p className='br1 bg-light-green fw5 pt1 pb1 pl0 pl3 pr3 mb0 label tc'>{date}</p>
          </div>
           <div className="ma5 mt0 mb3 br3 pa2 pt0 pb4 shadow-5 tc bible">
               <p className="br1 bg-light-yellow fw5 pa1 label">Today's Word</p>
               <p className="fw5 ma2 pb1">{scriptLoc}</p>
               <p className="fw1 ma0 pa0 text">{readMore ? Script : `${Script.substring(0, 120)}...`}
                <button className="btn blue" style={{borderColor:"transparent"}} 
                onClick={()=>{setReadMore(!readMore)}}>{readMore ? "Show Less" : "Show More"}</button></p>
            </div>
            <div className="ma5 mt3 mb0 br3 pa2 shadow-5 tc Prayer">
               <p className="br1 bg-light-yellow fw5 pa1 label">Today's Prayers Point</p>
               <p className="fw1 ma0 text">{readLarge ? SayPrayers : `${SayPrayers.substring(0, 70)}...`}
               <button className="btn blue" style={{borderColor:"transparent"}} 
               onClick={()=>{setReadLarge(!readLarge)}}>{readLarge ? "Show Less" : "Show More"}</button></p> 
           </div>
           <div className="ma5 mt3 mb3 br3 pa2 pb4 shadow-5 Affirmation">
               <p className="ml2 br1 tc bg-light-yellow fw5 pa1 label"> Today's Affirmation</p>
               <p className="fw1 tc ma0 pa0 text">{TodaysAffirm}</p>
            </div>
        </div>
              <div className='tc'>
                  <button className='prev' onClick={prevDays}><FiChevronLeft /></button>
                  <button className='next' onClick={nextDays}><FiChevronRight /></button>
              </div>
  </div>
  )
}

export default DailyDose;
