import React from 'react';

const Location = ({ destination, country, photo, distance }) => (
	<div>
		<h2>{destination}</h2>
		<h3>{country}</h3>
		<img src={photo} alt={destination} />
		<p>{distance} km from Berlin</p>
		<hr />
	</div>
);

export default Location;
