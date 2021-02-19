import React  from 'react';
import CountryList from './CountryList';
import SearchForm from './SearchForm';
import './style.css';

 const LiftingStateUp = (props) => {

    return (
        <div>
            {/*<h2>State i Yukarı Taşımak</h2>*/}
            <SearchForm search={props.search} onSearchChange={props.handleChange} />
            <CountryList search={props.search} />
        </div>
    );
}
export default LiftingStateUp;