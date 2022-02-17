import React from 'react';

const TodayDate = () => {
   const d = new Date();
   const dayNumber = d.getDate()
   const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
   const nowDay = days[d.getDay()];
   const month = ["January", "Febuary", "March", "April",
                  "May", "June", "July", "August", 
                  "September", "October", "November", "December"]
   const nowMonth = month[d.getMonth()];
   const year = d.getUTCFullYear()
   const todayDate = "It's " + nowDay + " " + nowMonth + " " + dayNumber + ", " + year
    return (
        <div className="fw5 mt0 pt2 mr3" style={{display:"flex", float:"right"}}>
          <p>{todayDate}</p>  
        </div>
    )
}
export default TodayDate;