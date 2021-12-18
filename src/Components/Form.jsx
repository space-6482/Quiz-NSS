import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Form = () => {
  let stool = {
    margin: "20px",
    display: "inline",
    width: "70vh",
    height: "60vh",
    position: "absolute",
    left: "60vh",
    top: "25vh",
  }
  let button={
    color:"white",
    backgroundColor:"lightblue", 
    textDecoration:"None",

  }
  let [value, setvalue] = useState({
    name: "",
    batch: "",
    email: "",
    college: ""
  });
  const Click = async (e) => {
    e.preventDefault();
    const { name, batch, email, college } = value;
    const res = await fetch('https://quiznss-3c432-default-rtdb.firebaseio.com/QuizNSS.json',
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, batch, email, college })
      }
    );
    if (res) {
      setvalue({
        name: "",
        batch: "",
        email: "",
        college: ""
      });
      alert("Data Stored");
    }
  }
  const Store = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setvalue((prev) => {
      return (
        {
          ...prev,
          [name]: value
        }
      )
    })
  }
  return (<>
    <div style={stool} class="shadow-lg p-3 mb-20 bg-body rounded">
      <form method="POST">
        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating">
              <input type="text" autoComplete="off" name="name" value={value.name} onChange={Store} class="form-control" id="floatingInputGrid" onChange={Store} required />
              <label for="floatingInputGrid">YOUR NAME</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating">
              <select class="form-select" name="batch" value={value.batch} onChange={Store} id="floatingSelectGrid" aria-label="Floating label select example" required>
                <option selected>Your Batch</option>
                <option value="1">Class 11</option>
                <option value="2">Class 12</option>
                <option value="3">Repeater</option>
              </select>
              <label for="floatingSelectGrid">Batch</label>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" autoComplete="off" name="email" onChange={Store} value={value.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleCollege" className="form-label">Name of Your college</label>
          <input type="text" autoComplete="off" name="college" value={value.college} onChange={Store} className="form-control" id="exampleInputCollegeName" required />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" autoComplete="off" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" onChange={Store} for="exampleCheck1">Check me out</label>
        </div>
         <button type="submit"  onClick={Click} className="btn " style={button}> <Link to='./Ques'>SUBMIT</Link></button>
      </form>
    </div>
    <div className="result">
      <ul>
        <li>
          name:{value.name}
        </li>
        <li>
          batch:{value.batch}
        </li>
        <li>
          email:{value.email}
        </li> <li>
          college:{value.college}
        </li>
      </ul>
    </div>
  </>)
}
export default Form
//link for the database {https://console.firebase.google.com/u/0/project/quiznss-3c432/database/quiznss-3c432-default-rtdb/data/~2FQuizNSS}