import React, { useContext } from "react";
import "./Header.css";
import { Button, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from "../../Icon/Logo.png";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
	const history = useHistory();
	const handleLoginRoute = () => {
		history.push("/user");
	};
	const [loggedInUser] = useContext(UserContext);
	// const [signOutUser, setSignOutUser] = useContext(UserContext);

	return (
		<Navbar bg="navbar-dark bg-primary" expand="md">
			<div className="container-lg">
				<Link to="/" className="navbar-brand mr-md-3 mr-0">
					<div className="logo">
						<img src={logo} style={{ maxWidth: "120px", color:"white" }} alt="logo dark" />
					</div>
				</Link>
				<div className="tg-search">
					<FormControl type="search" placeholder="Search here" className="mr-sm-2" />
				</div>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto align-items-md-center" >
						<Link to="/" className="nav-link mr-lg-5 mr-0">
							Home
						</Link>
						<Link to="/destination" className="nav-link mr-lg-5 mr-0" >
						    Destination
						</Link>
						<Link to="/destination" className="nav-link mr-lg-5 mr-0">
						   About
						</Link>
						{loggedInUser.isSignedIn ? (
							<Button className="btn btn-secondary">Sign out</Button>
						) : (
							<Button className="btn btn-success" onClick={handleLoginRoute}>
								Sign In
							</Button>
						)}

						{loggedInUser.isSignedIn && (
							<div className="user-icon">
								{loggedInUser.name ? loggedInUser.name.split(" ").slice(0, 1) : "User"}{" "}
								<i className="fas fa-user"></i>
							</div>
						)}
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

export default Header;
