import React from 'react';
import './locals.scss';

import IqNavigation from '../../../shared/ui/iq-navigation/IqNavigation';

// 3rd libs
import { Typography, Breadcrumb, Icon, Button, Row, Col, Tabs, Avatar, Input, Select, Rate } from 'antd';
import { cpus } from 'os';

const { Title } = Typography;
const { TabPane } = Tabs;

class DirectoryWrapper extends React.Component<any, any> {
	state = {
		visibleComponent: 'directory-items'
	}

	render() {
		const DirectoyItems = () => (
			<div className="directory-items-wrapper">
				{this.props.directory.map((directoryItem: any, i: number) => (
					<div className="directory-item-wrapper" key={i}>
						<div className="avatar">
							<Avatar shape="square" size={64} icon="picture" />
						</div>
						<div className="description">
							<Row>
								<Col sm={12} xl={8}>
									<Button className="title" type="link" onClick={() => this.setState({ visibleComponent: 'directory-item' })}>Amir's Shawarma Palace</Button>
									<div>406 Main Street, Boonton, NJ 07005</div>
									<div className="button-places">
										<Button type="danger" size="small">Midle Eastern</Button>
										<Button type="danger" size="small">turkish</Button>
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

		const DirectoyItem = () => (
			<div onClick={() => this.setState({ visibleComponent: 'directory-items' })}>Directoy Item</div>
		)

		return (
			<div className="directory-wrapper">
				{this.state.visibleComponent == 'directory-items' && (
					<DirectoyItems />
				)}
				{this.state.visibleComponent == 'directory-item' && (
					<DirectoyItem />
				)}
			</div>
		)
	}
}

class DirectorySearch extends React.Component<any, any> {
	render() {
		return (
			<div className="directory-wrapper">
				<Row gutter={[24, 24]}>
					<Col xl={24}>
						<div className="search-wrapper">
							<Input.Search
								placeholder="What? (Business)"
								onSearch={value => '50%'}
								style={{ width: '50%' }}
							/>
							<Input.Search
								placeholder="Where? (Places)"
								onSearch={value => ''}
								style={{ width: '50%' }}
							/>
						</div>
					</Col>
				</Row>
			</div>
		)
	}
};

class Locals extends React.Component<any, any> {

	state = {
		offers: [{}, {}, {}, {}, {}],
		populars: [{}, {}, {}, {}, {}],
		directory: [{}, {}, {}, {}, {}, {}, {}, {}],
		tabActiveKey: 'directory'
	}

	componentDidMount() {
		this.hideTabsPaneOnMobile();
	}

	hideTabsPaneOnMobile() {
		let nav: any = document.querySelector('.hidden-tab-pane .ant-tabs-bar');
		if (nav) {
			nav.style.display = 'none';
		}
	}

	render() {
		const TitleWrapper = () => (
			<div className="title-wrapper">
				<Breadcrumb className="breadcrumb">
					<Breadcrumb.Item href="">
						<Icon type="global" />
					</Breadcrumb.Item>
					<Breadcrumb.Item href="">
						<span>USA</span>
					</Breadcrumb.Item>
					<Breadcrumb.Item href="">
						<span>New Jersey</span>
					</Breadcrumb.Item>
					<Breadcrumb.Item>
						North Jersey
					</Breadcrumb.Item>
				</Breadcrumb>
			</div>
		)

		const AdvertiseWrapper = () => (
			<div className="advertise-wrapper">
				<div className="advertise-button-wrapper">
					<Button className="advertise-button" type="link">Advertise With Us</Button>
				</div>
				<div className="advertise-image">
				</div>
			</div>
		)

		const AdvertiseMobileWrapper = () => (
			<div className="advertise-mobile-wrapper">
				<div className="advertise-button-wrapper">
					<Button className="advertise-button" type="link">Advertise With Us</Button>
				</div>
				<div className="advertise-image">
				</div>
			</div>
		)

		const LocationsWrapper = () => (
			<div className="locations-wrapper">
				<div className="maps-image">
				</div>
			</div>
		)

		const OffersWrapper = () => (
			<div className="offers-wrapper">
				<Title level={3}>Offers in your area</Title>
				{this.state.offers.map((offer: any, i: number) => (
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

		const PopularWrapper = () => (
			<div className="popular-list-wrapper">
				<Title level={3}>Local popular list</Title>
				{this.state.populars.map((offer: any, i: number) => (
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

		return (
			<IqNavigation>
				<div id="locals-page">
					<Row className="sm-content">
						<Col xs={24}>
							<TitleWrapper />
							<br />
							<AdvertiseMobileWrapper />
							<br />
							<DirectorySearch />
						</Col>
						<Col xs={24}>
							<Tabs>
								<TabPane tab="Food Service" key="foodService" />
								<TabPane tab="Schools" key="schools" />
								<TabPane tab="Markets" key="markets" />
								<TabPane tab="Mosques" key="mosques" />
								<TabPane tab="News & Acitivites" key="newsAcitivites" />
								<TabPane tab="People" key="people" />
								<TabPane tab="Others" key="others" />
							</Tabs>
						</Col>
						<Col xs={4}>
							<Select style={{ marginBottom: '16px' }} defaultValue="directory" onChange={(value: any) => this.setState({ tabActiveKey: value })}>
								<Select.Option value="directory">Directory</Select.Option>
								<Select.Option value="offers">Offers</Select.Option>
								<Select.Option value="popularList">Popular List</Select.Option>
							</Select>
						</Col>
						<Col xs={20}>
							<div className="tags-wrapper" style={{ float: 'right' }}>
								<span>Sort by: </span>
								<Select className="tags" defaultValue="rating">
									<Select.Option value="rating">Rating</Select.Option>
									<Select.Option value="a-z">A-Z</Select.Option>
									<Select.Option value="newest">Newest</Select.Option>
									<Select.Option value="best-offers">Best Offers</Select.Option>
								</Select>
								<span>&nbsp;</span>
								<Select className="tags" defaultValue="map-view">
									<Select.Option value="map-view">Map View</Select.Option>
									<Select.Option value="list-view">List View</Select.Option>
									<Select.Option value="both-view">Both Map & List</Select.Option>
								</Select>
							</div>
						</Col>
						<Col xs={24}>
							<br />
							<LocationsWrapper />
						</Col>
						<Col xs={24}>
							<Tabs activeKey={this.state.tabActiveKey} className="hidden-tab-pane">
								<TabPane tab="Directory" key="directory">
									<DirectoryWrapper directory={this.state.directory} />
								</TabPane>
								<TabPane tab="Offers" key="offers">
									<OffersWrapper />
								</TabPane>
								<TabPane tab="Popular List" key="popularList">
									<PopularWrapper />
								</TabPane>
							</Tabs>
						</Col>
					</Row>

					<Row gutter={[24, 24]} className="md-content">
						<Col md={16}>
							<TitleWrapper />
							<DirectorySearch />
							<Row gutter={[24, 24,]}>
								<Col md={24}>
									<div className="tags-wrapper" style={{ float: 'right' }}>
										<span>Sort by: </span>
										<Select className="tags" defaultValue="rating">
											<Select.Option value="rating">Rating</Select.Option>
											<Select.Option value="a-z">A-Z</Select.Option>
											<Select.Option value="newest">Newest</Select.Option>
											<Select.Option value="best-offers">Best Offers</Select.Option>
										</Select>
										<span>&nbsp;</span>
										<Select className="tags" defaultValue="map-view">
											<Select.Option value="map-view">Map View</Select.Option>
											<Select.Option value="list-view">List View</Select.Option>
											<Select.Option value="both-view">Both Map & List</Select.Option>
										</Select>
									</div>
								</Col>
								<Col md={24}>
									<Tabs>
										<TabPane tab="Food Service" key="foodService" />
										<TabPane tab="Schools" key="schools" />
										<TabPane tab="Markets" key="markets" />
										<TabPane tab="Mosques" key="mosques" />
										<TabPane tab="News & Acitivites" key="newsAcitivites" />
										<TabPane tab="People" key="people" />
										<TabPane tab="Others" key="others" />
									</Tabs>
								</Col>
							</Row>
							<LocationsWrapper />
							<DirectoryWrapper directory={this.state.directory} />
						</Col>
						<Col md={8}>
							<AdvertiseWrapper />
							<br /><br />
							<OffersWrapper />
							<br /><br />
							<PopularWrapper />
						</Col>
					</Row>
				</div>
			</IqNavigation>
		);
	}
}
export default Locals;
