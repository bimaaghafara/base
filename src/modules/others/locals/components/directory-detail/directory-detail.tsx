import React from 'react';
import './directory-detail.scss';
import { withRouter } from 'react-router';
import { Carousel, Button, Avatar, Typography, Icon, Row, Col, Rate, Tooltip, Tabs } from 'antd';
import { LocationsWrapper } from '../location-wrapper/location-wrapper';
import TextArea from 'antd/lib/input/TextArea';

export const _DirectoryDetail: React.FC<any> = (props) => {
	let carouselRef: any;

	const BusinessProfile: React.FC<any> = () => (
		<div className="business-profile">
			<Avatar shape="square" size={150} icon="picture" />
			<Typography.Title level={2} className="rating">
				<Icon type="star" theme="filled" style={{color: '#f7db11'}} /> 3.8
			</Typography.Title>
			<div className="review">
				123.456.789 reviews
			</div>
			<Button
				type="default"
				className="follow-business"
				onClick={() => {console.log('tes')}}>
				Follow Business
			</Button>
		</div>
	)

	const MediaSocial: React.FC<any> = () => (
		<div className="media-social">
			<Button type="link">
				<Icon type="facebook" theme="filled" /> Facebook
			</Button>
			<Button type="link">
				<Icon type="instagram" theme="filled" /> Instagram
			</Button>
			<Button type="link">
				<Icon type="twitter-square" theme="filled" /> Twitter
			</Button>
		</div>
	)

	const Management: React.FC<any> = () => (
		<div className="management">
			<Typography.Title level={4} className="title">
				Management
			</Typography.Title>
			Are you the owner / manager of this business? <a>Click here to claim this record.</a>
		</div>
	)

	const QuickFacts: React.FC<any> = () => (
		<div className="quick-facts">
			<Typography.Title level={4} className="title">
				Quick Facts
			</Typography.Title>
			<Tooltip placement="top" title={'Rating'}>
				<Button type="link" className="tooltip">(?)</Button>
			</Tooltip>
			<Rate className="rate" character="$" allowHalf value={3} />
			<div className="item"><Icon type="car" /> Parking place</div>
			<div className="item"><Icon type="solution" /> Full halal menu</div>
			<div className="item"><Icon type="trophy" /> Alcohol free</div>
			<div className="item"><Icon type="home" /> Delivery available</div>
			<div className="item"><Icon type="team" /> Prayer Accomodations</div>
			<div className="item"><Icon type="wifi" /> Wifi available</div>
			<div className="item"><Icon type="dollar" /> Cash / credit card</div>
			<div className="item"><Icon type="branches" /> Public transit access</div>
			<div className="item"><Icon type="car" /> Parking place</div>
			<div className="item"><Icon type="solution" /> Full halal menu</div>
			<div className="item"><Icon type="trophy" /> Alcohol free</div>
			<div className="item"><Icon type="home" /> Delivery available</div>
			<div className="item"><Icon type="team" /> Prayer Accomodations</div>
			<div className="item"><Icon type="wifi" /> Wifi available</div>
			<div className="item"><Icon type="dollar" /> Cash / credit card</div>
			<div className="item"><Icon type="branches" /> Public transit access</div>
		</div>
	);

	const Followers: React.FC<any> = (props) => (
		<div className="followers-wrapper">
			<Typography.Title level={3} className="title">Followers</Typography.Title>
			{props.followers.map((follower: any, i: number) => (
				<div className="follower-wrapper" key={i}>
					<div className="avatar">
						<Avatar size={32} icon="user" />
					</div>
					<div className="information">
						<Button className="name" type="link">Milliam Whitterson</Button>
						<div className="detail">Piscataway Township, NJ</div>
					</div>
				</div>
			))}
			<div className="see-other-wrapper">
				<Button className="see-other" type="link" icon="eye">See all 1.234 followers</Button>
			</div>
		</div>
	)

	const SummaryWrapper: React.FC<any> = () => (
		<div className="summary-wrapper">
			<Row>
				<Col xl={16} className="left-summary">
					<Typography.Title level={2} className="title">
						Amir's Shawarma Palace
					</Typography.Title>
					<div className="address">
						<Icon type="environment" theme="filled" className="marker-icon"/>
						406 Main Street, Boonton, NJ 07005
					</div>
					<div className="phone">
						<span className="phone-icon"><Icon type="phone" theme="filled" /></span>
						(973) 877-3759
					</div>
				</Col>
				<Col xl={8} className="right-buttons">
					<Button>Food Services</Button>
					<Button>Halal-confirmed <Icon type="check-circle"/></Button>
				</Col>
			</Row>
		</div>
	)

	const BusinessOverview: React.FC<any> = () => (
		<div className="business-overview">
			<Typography.Title level={4} className="title">
				Bussiness Overview
			</Typography.Title>
			<div className="button-places">
				<Button type="danger" size="small">Midle Eastern</Button>
				<Button type="danger" size="small">Turkish</Button>
			</div>
			<div className="description">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				<div className="added-on">
					Added on September 15, 2004 and last update 6 years ago.
				</div>
			</div>
		</div>
	)

	const OpeningHours: React.FC<any> = () => (
		<div className="opening-hours">
			<Typography.Title level={4} className="title">
				Opening Hours
			</Typography.Title>
			<div className="status">Closed</div>
			<div className="schedules">
				<div className="schedule">Sun <div className="time">9AM - 9PM</div></div>
				<div className="schedule">Mon <div className="time">9AM - 9PM</div></div>
				<div className="schedule">Tue <div className="time">9AM - 9PM</div></div>
				<div className="schedule">Wed <div className="time">9AM - 9PM</div></div>
				<div className="schedule">Thu <div className="time">9AM - 9PM</div></div>
				<div className="schedule">Fri <div className="time">9AM - 9PM</div></div>
				<div className="schedule">Sat <div className="time">9AM - 9PM</div></div>
			</div>
		</div>
	)

	const ImageGallery: React.FC<any> = () => (
		<div className="image-gallery">
			<div className="carousel-wrapper">
				<Carousel 
					className="center"
					customPaging={(i) => <a className="carousel-paging">{i+1}</a>}
					infinite= {true}
					slidesToShow={1}
					swipeToSlide= {true}
					ref={c => (carouselRef = c)}
				>
					<div>
						<h3>1</h3>
					</div>
					<div>
						<h3>2</h3>
					</div>
					<div>
						<h3>3</h3>
					</div>
					<div>
						<h3>4</h3>
					</div>
				</Carousel>
				<Button className="carousel-prev" shape="circle" icon="left" onClick={() => carouselRef.prev()}/>
				<Button className="carousel-next" shape="circle" icon="right" onClick={() => carouselRef.next()}/>
			</div>
			<div className="carousel-bottom-buttons">
				<Button type="link" icon="plus-square"> Upload Image </Button>
				<Button type="link" > View Complete Gallery </Button>
			</div>
		</div>
	);

	const Reviews: React.FC<any> = (props) => (
		<Tabs type="card">
			<Tabs.TabPane tab="Reviews" key="reviews" className="reviews-wrapper">
				<div className="form-review">
					<div className="user">
						<Avatar size={22} icon="user" /> momo.zx
					</div>
					<div className="info">
						<div className="left">Tell us what you think about this bussiness (500 characters left)</div>
						<div className="right">Rating: <Rate allowHalf defaultValue={3.5} /></div>
					</div>
					<TextArea
						placeholder=""
						autoSize={{minRows: 3, maxRows: 5}}
					/>
					<div className="button-add-review-wrapper">
						<Button>Add Review</Button>
					</div>
				</div>
				<div className="reviews">
					{props.reviews.map((review: any, i: number) => (
						<div className="review" key={i}>
							<div className="author" key={i}>
								<div className="avatar">
									<Avatar size={42} icon="user" />
								</div>
								<div className="information">
									<Button className="name" type="link">Milliam Whitterson</Button>
									<Button className="follow" size="small" icon="plus">Follow</Button>
									<div className="detail">Piscataway Township, NJ</div>
									<div className="rated">
										<span>3 days ago</span>
										<span>Rated 4.0</span> 
									</div>
									<div className="description">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
									</div>
									<div className="buttons-bottom">
										<Button size="small">Thanks!</Button>
										<Button size="small">Report</Button>
										<Button size="small" type="primary">Tweets</Button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<Button block>See more reviews</Button>
			</Tabs.TabPane>
		</Tabs>
	);

	return (
		<div className="directory-detail-wrapper">
			<div className="lg-more-content">
				<div className="left-section">
					<BusinessProfile />
					<MediaSocial />
					<Management />
					<QuickFacts />
					<Followers followers={[{}, {}, {}, {}, {}]}/>
				</div>
				<div className="right-section">
					<SummaryWrapper />
					<LocationsWrapper />
					<BusinessOverview />
					<OpeningHours />
					<ImageGallery />
					<Reviews reviews={[{}, {}, {}, {}, {}]}/>
				</div>
			</div>
			<div className="md-less-content">
				<BusinessProfile />
				<MediaSocial />
				<SummaryWrapper />
				<Management />
				<LocationsWrapper />
				<BusinessOverview />
				<QuickFacts />
				<OpeningHours />
				<ImageGallery />
				<Followers followers={[{}, {}, {}, {}, {}]}/>
				<Reviews reviews={[{}, {}, {}, {}, {}]}/>
			</div>			
		</div>
	)
}

export const DirectoryDetail = withRouter(_DirectoryDetail);