import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Destination from "./components/Destination/Destination";
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

 export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
       <p>Name:{loggedInUser.name}</p>
       <Router>
        <Header></Header>
      <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/destination">
              <Destination/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
