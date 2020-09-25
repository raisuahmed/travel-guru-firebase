import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Booking from "./Components/Booking/Booking";
import Destination from "./Components/Destination/Destination";

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
						
					</Route>
					<Route path="/booking/:id">
						<Booking></Booking>
					</Route>
					
						<Destination></Destination>
					
					<Route path="*">
						
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
