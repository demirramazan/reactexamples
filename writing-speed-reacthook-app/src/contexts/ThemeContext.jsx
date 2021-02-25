import React, {Component, createContext} from "react";

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
    state = {
        isDarkTheme: false,
        dark: {
            app: "bg-dark",
            navbar: "navbar-light bg-warning",
            buttonFont: "btn-outline-dark",
            card: "bg-open-gray border-danger text-white",
            table: "table-dark"
        },
        light: {
            app: "bg-light",
            navbar: "navbar-dark bg-dark",
            buttonFont: "btn-outline-light",
            card: "bg-light border-info",
            table: "table-light"
        }

    }

    componentDidMount() {
        const themeLS = localStorage.getItem('theme');
        this.setState(themeLS ? JSON.parse(themeLS) : this.state)
    }

    componentDidUpdate() {
        localStorage.setItem('theme', JSON.stringify(this.state));
    }

    getTheme = () => {
        const {isDarkTheme, dark, light} = this.state;
        const theme = isDarkTheme ? dark : light;
        return theme;
    }
    changeTheme = () => {
        this.setState({
            isDarkTheme: !this.state.isDarkTheme
        })
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state, getTheme: this.getTheme, changeTheme: this.changeTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );

    }
}