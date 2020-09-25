import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Booking from "./Components/Booking/Booking";
import Destination from "./Components/Destination/Destination";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

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
					<Route path="/user">
						<Login></Login>
					</Route>
					<Route path="/booking/:id">
						<Booking></Booking>
					</Route>
					<PrivateRoute path="/destination">
						<Destination></Destination>
					</PrivateRoute>
					
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
