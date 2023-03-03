import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all")
        .then(response => setCountries(response.data))
        .catch(error => console.log({error}));

    }, [])
  return countries.map(country => {
    const {name, flag, capital} = country;

    return(
        <div key={name} className="country">
            <div>
                <img src={flag} alt={name} />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{capital}</p>
            </div>
        </div>
    )
  })
}

export default CountryList