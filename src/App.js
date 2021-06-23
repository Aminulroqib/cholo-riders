import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Destination from "./components/Destination/Destination/Destination.js";
import Header from './components/Home/Header/Header';
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import Car from '../src/components/Vehicles/VehicleOption/Car'
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignUp from'./components/Login/SignUp/SignUp'

 export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
       <Router>
      <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <PrivateRoute path="/car">
            <Car/>
          </PrivateRoute>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/destination">
              <Destination/>
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
