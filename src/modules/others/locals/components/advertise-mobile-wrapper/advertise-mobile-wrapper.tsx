import React from 'react';

// 3rd libs
import { Button } from 'antd';

export const AdvertiseMobileWrapper: React.FC<any> = () => {
	return (
		<div className="advertise-mobile-wrapper">
			<div className="advertise-button-wrapper">
				<Button className="advertise-button" type="link">Advertise With Us</Button>
			</div>
			<div className="advertise-image">
			</div>
		</div>
	)
}