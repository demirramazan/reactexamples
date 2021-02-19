import './App.css';
import { Component } from 'react'
import UserList from './components/UserList';
import AddUser from './forms/AddUser';
import UpdateUser from './forms/UpdateUser';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar title="User Application Program" />
          <hr/>
          <Switch>
            <Route exact path="/" component={UserList} />
            <Route exact path="/add" component={AddUser} />
            <Route exact path="/edit/:id" component={UpdateUser} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
