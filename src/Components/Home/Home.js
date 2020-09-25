import React from "react";
import { useHistory } from "react-router-dom";
import FakeData from "../../fakeData";
import TravelCard from "../TravelCard/TravelCard";
 import "./Home.css";

const Home = () => {
	const history = useHistory();
	const travelCardData = FakeData.slice(0, 3);

	const handleBookingRoute = () => {
		history.push(`/booking/${travelCardData[0].id}`);
	};

	return (
		<main className="hero d-flex align-items-center  ">
			<div className="container">
				<div className="row">
					<div className="col-md-3">
										
							<button className="btn btn-primary" style={{marginTop:"260px"}} onClick={handleBookingRoute}>
								 Booking <i className="fas fa-arrow-left"></i>
							</button>
						
					</div>
					<div className="col-md-7">
						<div className="hero-images">
							<div className="row">
								{travelCardData.map((item) => (
									<TravelCard travelCard={item} key={item.id}></TravelCard>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
