import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  const getMusic = async(event) => {
    // event.preventDefault() ; 
    const response = await fetch(`
      http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_ART_KEY}/json/culturalEventInfo/1/10
    `) ;
    const json = await response.json() ; 
    console.log(json.culturalEventInfo.row) ;
    // console.log(json) ;
  } ; 

  useEffect(() => {
    getMusic(); 
  }, []); 

  return (
    <div className="App">
      <h2> hi? </h2>
    </div>
  );
}

export default App;
