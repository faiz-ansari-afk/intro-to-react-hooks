import React, { Fragment } from 'react';
 function Time(){
    setInterval(updateTime,1000)
    const now = new Date().toLocaleTimeString();
    const [time,setTime] = React.useState(now);
    function updateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime)
    }
     return(
         <Fragment>
             <h1>{time}</h1>
             <button className="time-btn" onClick={updateTime}>Get Time</button>
         </Fragment>
     )
 }
 export default Time;