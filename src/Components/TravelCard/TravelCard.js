import React from "react";
import { Link } from "react-router-dom";

const TravelCard = (props) => {
	const { title, imgUrl, id } = props.travelCard;
	return (
		<div className="col-4 mt-4">
			<Link to={`/booking/${id}`}>
				<div className="hero-img">
					<img src={imgUrl} style={{ maxWidth: "100%", marginTop:"10px" }} alt="" />
					<h3>{title}</h3>
				</div>
			</Link>
		</div>
	);
};

export default TravelCard;
