
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}





/* <LoadCountries></LoadCountries> */
// function LoadCountries(){
//   const [countries,setCountries]= useState([])

//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>setCountries(data))
//   },[])
//   return(
//     <div>
//       <h1>Visiting Every Countries</h1>
//       <h3>Available Country : {countries.length}</h3>
//        {
//         countries.map(country => <Country name={country.name.common} population={country.population} capital= {country.capital}></Country>)
//       }
//     </div>
//   );
// }
// function Country(props){
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h4>Population: {props.population}</h4>
//       <h3>Capital: {props.capital}</h3>
//     </div>
//   )
// }

export default App;
