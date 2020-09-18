import React, { useState } from 'react';
import CountryList from './CountryList';
import SearchForm from './SearchForm';
import './style.css';

const LiftingStateUp = () => {

    const [search, setSearch] = useState("");

    const handleChange = e => setSearch(e.target.value);

    return (
        <div className="App">
            <h2>State i Yukarı Taşımak</h2>
            <SearchForm search={search} onSearchChange={handleChange} />
            <CountryList search={search} />
        </div>
    );
}

export default LiftingStateUp;