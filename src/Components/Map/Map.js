import React, { useState } from "react";
import { GoogleMap, Marker, withScriptjs, withGoogleMap, InfoWindow } from "react-google-maps";
import { hotelsInfo } from "../../fakeData/hotelsInfo";

const HotelMap = () => {
	const [infoBox] = useState(null);
	return (
		<GoogleMap defaultZoom={12} defaultCenter={{ lat: 21.4242785, lng: 91.9315097 }}>
			{hotelsInfo.map((hotel) => (
				<Marker
					position={{
						lat: hotel.cords.lat,
						lng: hotel.cords.lng,
					}}
					onClick={() => hotel}
				/>
			))}
			{infoBox && (
				<InfoWindow>
					<div>Hotel details</div>
				</InfoWindow>
			)}
		</GoogleMap>
	);
};
const WrappedMap = withScriptjs(withGoogleMap(HotelMap));

const Map = () => {
	return (
		<div className="google-map">
			<WrappedMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDsiHsbdv3aRyFeXWFef8Qdm1DTzumnr70`}
				loadingElement={<div style={{ height: `300px` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ width: "300px", height: "300px", borderRadius: "13px" }} />}
			/>
		</div>
	);
};

export default Map;
