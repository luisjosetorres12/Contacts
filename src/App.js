import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import RegisterContact from './components/RegisterContact';
import ListContacts from './components/ListContacts';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/register">
            <RegisterContact></RegisterContact>
          </Route>
          <Route exact path="/contacts">
            <ListContacts></ListContacts>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
