import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
    <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries(){
  const [countries,setCountries]= useState([])

  useEffect(()=>{
    
  },[])
  return(
    <div>
      <h1>Visiting Every Countries</h1>
    </div>
  );
}

export default App;
