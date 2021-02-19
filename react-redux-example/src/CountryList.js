import React, { useEffect} from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'
import {getCountries} from "./actions";

export const CountryList = (props) => {
    // const [countries, setCountries] = useState([]);
    useEffect(() => {
        // axios
        //     .get("https://restcountries.eu/rest/v2/all")
        //     .then(response => setCountries(response.data))
        //     .catch(error => console.log({ error }));
        props.getCountries();
    }, []);

    return (
        <div>
            {
                props.isLoading ? (
                        <p>
                            <img
                                style={{width: 30, height: 30}}
                                src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"
                                alt="yukleniyor"
                            />
                        </p>
                    ) :
                    props.countries
                        .filter(country =>
                            country.name.toLowerCase()
                                .includes(props.search.toLowerCase())
                        )
                        .map(country => {
                            return (
                                <div key={country.name} className="country">
                                    <div>
                                        <img src={country.flag} alt={country.name}/>
                                    </div>
                                    <div>
                                        <h2>{country.name}</h2>
                                        <p>{country.capital}</p>
                                    </div>
                                </div>

                            );
                        })
            }
        </div>
    );
}

const mapToStateToProps = state => {
    return {
        countries: state.countries,
        isLoading: state.isLoading
    };
};
export default connect(mapToStateToProps, {getCountries})(CountryList);
