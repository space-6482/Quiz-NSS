import React from 'react'

const Data = () => {
    let Data={
        position:"Absolute",
        left:"50vh",
        margin:"5vh"
    }
    return (
        <div style={Data}>
           
  <div className="mb-3">
    <label for="exampleInputEmail1"  className="form-label">Enter Your Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div classNameName="mb-3">
    <label for="exampleInputPassword1" classNameName="form-label">Password</label>
    <input type="password" classNameName="form-control" id="exampleInputPassword1"/>
  </div>
  <div classNameName="mb-3 form-check">
    <input type="checkbox" classNameName="form-check-input" id="exampleCheck1"/>
    <label classNameName="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" classNameName="btn btn-primary">Submit</button>

            
        </div>
    )
}

export default Data
