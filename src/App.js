import React, { createContext, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Booking from './Components/Booking/Booking';
import Hotels from './Components/Hotels/Hotels';
import Login from './Components/Login/Login';
// import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Destination from './Components/Destination/Destination';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
	const [signOutUser, setSignOutUser] = useState({});
  return (
    <UserContext.Provider value={([loggedInUser, setLoggedInUser], [signOutUser, setSignOutUser])}>
    
          
            
            <Router>
				<Header></Header>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route path="/hotels/:name" exact> <Hotels /> </Route>
  
						<Login></Login>
				
					<Route path="/booking/:id">
						<Booking></Booking>
					</Route>
					< Route path="/destination">
						<Destination></Destination>
						</Route>
					<Route path="*">
						
					</Route>
				</Switch>
			</Router>
            
                   
    </UserContext.Provider>
  );
}

export default App;
