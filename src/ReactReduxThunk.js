import React, {useState} from 'react';
import LiftingStateUp from './LiftingStateUp';
import './style.css';

const ReactReduxThunk = () => {
    const [search, setSearch] = useState("");

    const handleChange = e => setSearch(e.target.value);

    return (
        <div className="App">
            <h2>React Redux </h2>
            <LiftingStateUp search={search} handleChange={handleChange}/>
        </div>
    )
}
export default ReactReduxThunk;