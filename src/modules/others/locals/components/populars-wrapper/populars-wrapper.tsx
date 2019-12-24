import React from 'react';
import { Typography, Avatar, Button } from 'antd';

export const PopularWrapper: React.FC<any> = (props) => {
	return (
		<div className="popular-list-wrapper">
			<Typography.Title level={3}>Local popular list</Typography.Title>
			{props.populars.map((offer: any, i: number) => (
				<div className="popular-wrapper" key={i}>
					<div className="avatar">
						<Avatar size={32} icon="user" />
					</div>
					<div className="description">
						<Button className="title" type="link">Zubaidah's halal American restaurants</Button>
						<div className="author">
							By <Avatar size={14} icon="user" /> Zubaidah Amman <Avatar size={14} icon="check" />
						</div>
					</div>
				</div>
			))}
			<div className="see-other-wrapper">
				<Button className="see-other" type="link">See other list</Button>
			</div>
		</div>
	)
}