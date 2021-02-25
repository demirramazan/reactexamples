import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Challenges from './components/challenges/Challenges';
import SpeedCheck from './components/speedcheck/SpeedCheck'
import Results from './components/results/Results';
import {ThemeContext} from "./contexts/ThemeContext";

export default function App() {
    return (
        <ThemeContext.Consumer>
            {
                (context) => {
                    const {isDarkTheme, dark, light} = context;
                    const theme = isDarkTheme ? dark : light;

                    return (
                        <div className={`app-layout ${theme.app}`}>
                            <div className="container pt-1">
                                <Router>
                                    <Navbar/>
                                    <Switch>
                                        <Route exact path="/" component={SpeedCheck}/>
                                        <Route exact path="/challenges" component={Challenges}/>
                                        <Route exact path="/results" component={Results}/>
                                    </Switch>
                                </Router>
                            </div>
                        </div>
                    )
                }
            }
        </ThemeContext.Consumer>

    )
}
