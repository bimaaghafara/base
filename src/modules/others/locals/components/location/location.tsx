import React from 'react';
import './location.scss';

// 3rd libs

export const Location: React.FC<any> = (props) => {
	return (
		<div className="location-wrapper">
			<div className="maps-image" style={props.style}>
			</div>
		</div>
	)
}