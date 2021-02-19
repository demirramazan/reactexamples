import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    return(
        <div>
            <h2>{props.title}</h2>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/add">Add User</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;