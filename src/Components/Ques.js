import React, { useState, useRef, useEffect } from 'react';
import { data } from './question.json';
// import Text from './Text';
const Ques = () => {
    let [int, setInt] = useState(0);
    let [Tim, setTime] = useState(0);
    // let [RadioChange, SetRadioChange] = useState(null)
    let [showScore, setshowScore] = useState(false);
    let CountRef = useRef(null);
    let NextRef = useRef(null);
    let SNextRef = useRef(null)
    // useEffect(() => {
    //     //  alert("quiz is going to start How's the jose!!!");
    //     Change();
    // }, [])
    let Containe = {
        display: "inline-block",
        position: "absolute",
        top: "20vh",
        left: "40vh",
        backgroundColor: "lightblue",
        padding: "10vh",
        margin: "10px"
    }
    const curl = (event) => {
       console.log(event.key)
    }
    const Change = (answer) => {
        // let number=0
        //  if(SNextRef.current.className===answer){
        //    number+=1;
        //  }
        
        // console.log(SNextRef.current);
        
        // SetRadioChange(null)
        int += 1;
        let x = 0;
        const nextquestion = int ;
        if (nextquestion < data.length) {
            setInt(nextquestion);
        } else {
            // alert("you have reached at te end")
            setshowScore(true);
        }

        clearInterval(CountRef.current);
        clearTimeout(NextRef.current);

        CountRef.current = setInterval(() => {
            x += 1;
            setTime(x);
        }, 1000);

        NextRef.current = setTimeout(() => {
            Change();
        }, 5000);
        // answer.preventDefault();

    }
    let n=0
    // const Cultury=(index)=>{
    //       console.log(SNextRef.current.key);
    // }
    return (
        <div>
            {showScore ?
                <h style={Containe} className="shadow-lg m-1 p-3 mb-5 bg-body rounded">Your scored  out of 10</h>
                :
                <div style={Containe} className="shadow-lg m-1 p-3 mb-5 bg-body rounded">
                    <p style={{ textAlign: "center" }}>  Time: {Tim}sec</p>
                    <h1> {data[int].question}</h1>
                    {/* <form onSubmit={Change} action=""> */}
                {data[int].choices.map((Element,i) => {
                    return (<><input style={{textAlign: "left"}} name={int} key={i} ref={SNextRef} onClick={curl} type ="radio"/>
                    <label htmlFor={i} className="m-1 p-2 ">{Element}</label><br /></>)
                })} <br />
                 {/* </form> */}
                    <div className="text-end"><button  className="p-1 m-1 btn-secondary text-center" onClick={()=>Change(data.answer)}>Next</button> </div>
                </div>}
        </div>
    )
}
export default Ques
