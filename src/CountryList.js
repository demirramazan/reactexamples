import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryList = (props) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => setCountries(response.data))
            .catch(error => console.log({ error }));
    }, []);

    return countries
        .filter(country =>
            country.name.toLowerCase().includes(props.search.toLowerCase())
        )
        .map(country => {
            return (
                <div key={country.name} className="country">
                    <div>
                        <img src={country.flag} alt={country.name} />
                    </div>
                    <div>
                        <h2>{country.name}</h2>
                        <p>{country.capital}</p>
                    </div>
                </div>

            );
        });
}

export default CountryList;