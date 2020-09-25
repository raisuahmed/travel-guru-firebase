import React from "react";


import GMap from "../Gmap/Gmap";

const Destination = () => {
	return (
		<div className="tg-destination container">
			<div className="section-top text-left pt-3">
				<h4>252 stays Apr 13-17 3 guests</h4>
				<h3>Stay in Cox’s Bazar</h3>
			</div>
			<div className="row">
				<div className="col-lg-7">
					
				</div>
				<div className="col-lg-5">
					<GMap></GMap>
				</div>
			</div>
		</div>
	);
};

export default Destination;
