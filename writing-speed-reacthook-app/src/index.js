import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from "./contexts/ThemeContext";
import ChallengeContextProvider from "./contexts/ChallengeContext"
import ChallegeResultContextProvider from "./contexts/ChallengeResultContext";

ReactDOM.render(
    <React.StrictMode>
        <ThemeContextProvider>
            <ChallengeContextProvider>
                <ChallegeResultContextProvider>
                    <App/>
                </ChallegeResultContextProvider>
            </ChallengeContextProvider>
        </ThemeContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
