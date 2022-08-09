import React from 'react';

const Country = (props) => {
  const {name, population, region, flag}= props.country
  const flagstyle = {height: '50px'}
  const countryStyle = {border: '2px solid red', margin: '5px', padding: '10px'}
  const handleAddCountry = props.handleAddCountry;

 return (
   <div style={countryStyle}>
     <h4>This is {name}</h4>
     <img style={flagstyle} src={flag} alt=""/>
     <h6>This country's population is: {population}</h6>
     <p>Region: {region}</p>
     <button onClick={() => handleAddCountry(props.country)}>Add to Country</button>

   </div>
 );
};

export default Country;