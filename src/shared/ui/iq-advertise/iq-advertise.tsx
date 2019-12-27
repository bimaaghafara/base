import React from 'react';
import './iq-advertise.scss';

// 3rd libs
import { Button } from 'antd';

export const IqAdvertise: React.FC<any> = () => {
	return (
		<div className="iq-advertise-wrapper">
			<div className="advertise-button-wrapper">
				<Button className="advertise-button" type="link">Advertise With Us</Button>
			</div>
			<div className="advertise-image">
			</div>
		</div>
	)
}