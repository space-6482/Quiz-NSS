import React,{useState} from 'react'

const Time = () => {
    
    let count=0;
    let [CTime,SetCTime]=useState(count);
    setInterval(()=>{
        CTime++;
        SetCTime(CTime);
    }, 1000);
    return (
        <div>
            <h1>{CTime}</h1>
           
            
            
        </div>
    )
}

export default Time
