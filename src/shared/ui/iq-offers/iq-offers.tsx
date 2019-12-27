import React from 'react';
import { Typography, Avatar, Button } from 'antd';

import './iq-offers.scss';

export const IqOffers: React.FC<any> = (props) => {
	return (
		<div className="offers-wrapper">
			<Typography.Title level={3}>Offers in your area</Typography.Title>
				{props.offers.map((offer: any, i: number) => (
					<div className="offer-wrapper" key={i}>
						<div className="avatar">
							<Avatar shape="square" size={32} icon="user" />
						</div>
						<div className="description">
							<Button className="title" type="link">Happy hour 15% off promo</Button>
							<div className="detail">
								Uncle Tony's Pizza, Brunswick, NJ
							</div>
							<div className="date">
								Expires: 22 December 2019
							</div>
						</div>
					</div>
				))}
				<div className="more-offer-wrapper">
					<Button className="more-offer" type="link">Look for more offers</Button>
				</div>
			</div>
	)
}