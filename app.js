import { useEffect, useState } from "react";
import "./styles.css";
import Country from './Components/Country';
import Cart from "./Components/Cart/Cart";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart)
  }


  return (
    <div className="App">
      <h2>Country Loaded: {countries.length}</h2>
      <h5>Country added: {cart.length}</h5>
      <Cart cart={cart}></Cart>
      <ul>
       {
         countries.map(country => <Country 
          country={country}
           key={country.alpha3Code}
           handleAddCountry = {handleAddCountry}>
          </Country>)
       }
      </ul>
      
    </div>
  );
};
