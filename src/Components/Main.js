import React from 'react'
import Subject from './Subject'
import Advertisement from './Advertisement'
// import Form from './Form'
// import Time from './Time'

const Main = () => {
    let MainStyle={
        margin:"3px",
        position:"absolute",
        left:"15vh",
        top:"10vh"
    }
    return (
        <div>
            <h1 style={MainStyle}><b>Welcome to the Quiz</b></h1>
           
            <Subject/>
            <Advertisement/>
           {/* <Time/> */}
            {/* <Form/> */}
         
           
            {/* <Data/> */}
        </div>
    )
}

export default Main
