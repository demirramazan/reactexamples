import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {ThemeContext} from "../contexts/ThemeContext";

export default class Navbar extends Component {
    static contextType = ThemeContext;

    render() {
        const theme = this.context.getTheme();
        return (
            <div>
                <nav className={`navbar navbar-expand-lg ${theme.navbar} rounded mb-2`}>
                    <NavLink className="navbar-brand" to="/">Yazı Test</NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav m-auto">
                            <NavLink exact className="nav-item nav-link" to="/">Anasayfa</NavLink>
                            <NavLink exact className="nav-item nav-link" to="/challenges">Yazılarım</NavLink>
                            <NavLink exact className="nav-item nav-link" to="/results">Sonuçlarım</NavLink>
                        </div>
                    </div>
                    <button className={`btn ${theme.buttonFont}`}
                            onClick={this.context.changeTheme}>{theme.isDarkTheme ? "Açık Tema" : "Koyu Tema"}</button>
                </nav>
            </div>

        )
    }
}
