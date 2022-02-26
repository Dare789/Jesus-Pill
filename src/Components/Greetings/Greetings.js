import React from 'react';

const Greetings = () => {
  function renderTime(){

   const nowDate = new Date()
   let time = nowDate.getHours()

       if(6 <= time && time < 12){
          return "Morning, Hope you slept well? ☕"
         }
       else if(12 <= time && time < 17){
          return "Afternoon, How is it going? 🏃"
         }
       else if(17 <= time && time <= 24){
          return "Evening, I hope you had a great day?😊"
        }
       else if (0 <= time && time < 6){
          return "Its Midnight why are you awake? 😕"
        }
 return time
}
    return <p className=" fw5  ml3 pa1 pa1 pb1 mb0">{renderTime()}</p>
}
export default Greetings;