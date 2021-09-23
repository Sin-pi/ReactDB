import React, { useState, useEffect } from "react"
import Axios from 'axios'
import './App.css';

function App() {

  const [movieName, setMovieName] = useState('')
  const [movieReview, setMovieReview] = useState('')

  const submitReview = () =>{
    Axios.post("http:/localhost:3001/api/get",{
      movieName: movieName, 
      movieReview: movieReview,
    }).then(() => {
      alert("success")
    })
  }

  return (
    <div className="App">
       <h1>Movie Reviews</h1>

       <div className="form">
       <label>Movie name</label>
       <input type="text" name="MovieName" onChange ={(e) =>{
          setMovieName(e.target.value);
        }}
       />
       <label>Reivew</label>
       <input type="text" name="MovieReview" onChange ={(e) =>{
          setMovieReview(e.target.value);
        }}
        />
       <button onClick = {submitReview()}>Submit</button>
       </div>

    </div>
  );
}

export default App;
