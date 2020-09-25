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
		<main className="tg-hero d-flex align-items-center  ">
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<div className="card mb-md-0 mt-4">
							<h1>Cox's Bazar</h1>
							<p>
							<strong>Cox's Bazar </strong>(Bengali: কক্সবাজার, pronounced [kɔksbadʒaɾ]) is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach.....				</p>
							</div>
							<button className="btn tg-primary p-5" onClick={handleBookingRoute}>
								Start Booking <i className="fas fa-arrow-left"></i>
							</button>
						
					</div>
					<div className="col-md-7">
						<div className="tg-hero-images">
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
