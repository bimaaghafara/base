import React from 'react';
import './directory-list.scss';
import { Avatar, Row, Col, Button, Rate, Icon } from 'antd';
import { withRouter } from 'react-router';

const _DirectoryList: React.FC<any> = (props) => {

	const removeLastSlash = (url: string) => {
		return url[url.length-1] === '/'? url.slice(0, -1) : url
	}

	return (
		<div className="directory-list-wrapper">
			{props.directory.map((directoryItem: any, i: number) => (
				<div className="directory-item-wrapper" key={i}>
					<div className="avatar">
						<Avatar shape="square" size={64} icon="picture" />
					</div>
					<div className="description">
						<Row>
							<Col sm={12} xl={8}>
								<Button
									className="title"
									type="link"
									onClick={() => {props.history.push(`${removeLastSlash(props.match.url)}/details/123abc`)}}
								>
									Amir's Shawarma Palace
								</Button>
								<div>406 Main Street, Boonton, NJ 07005</div>
								<div className="button-places">
									<Button type="danger" size="small">Midle Eastern</Button>
									<Button type="danger" size="small">Turkish</Button>
								</div>
							</Col>
							<Col sm={12} xl={8}>
								<div>User's rating: <Rate allowHalf defaultValue={3.5} style={{ fontSize: 12, verticalAlign: 'text-top' }} /></div>
								<div>Price rating: <Rate character="$" allowHalf defaultValue={2.5} style={{ fontSize: 16 }} /></div>
								<div>Open: Today, 9AM - 9PM</div>
							</Col>
							<Col sm={24} xl={8}>
								<Button type="default" style={{ width: '100%', margin: '12px 0', padding: '0' }}>(973) 877-3759</Button>
								<div className="description-tags">
									<span><Icon type="car" /> Parking Place</span>
									<span><Icon type="mail" /> Delivery Available</span>
									<span><Icon type="smile" /> Full Halal Menu</span>
									<span><Icon type="trophy" /> Alcohol-Free</span>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			))}
		</div>
	);
}

export const DirectoryList = withRouter(_DirectoryList);