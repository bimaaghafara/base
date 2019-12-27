import React from 'react';
import './scholarships.scss';

// components
import { IqNavigation } from '../../../shared/ui/iq-navigation/iq-navigation';
import { IqAdvertise } from '../../../shared/ui/iq-advertise/iq-advertise';
import { IqOffers } from '../../../shared/ui/iq-offers/iq-offers';

// 3rd libs
import { Row, Col, Typography, Button, Icon, Avatar } from 'antd';

const ImageHeader: React.FC<any> = () => (
	<div className="image-header-wrapper">
		<div className="image-header">
		</div>
		<div className="description">
			<Typography.Title level={3} className="text">Donators: help our muslim students get a scholarship form our network</Typography.Title>
			<Button type="primary">Sponsor an scholarship</Button>
		</div>
	</div>
);


const TopCards: React.FC<any> = (props) => {
	const TopCard: React.FC<any> = () => (
		<Col md={12} lg={8}>
			<div className="top-card-wrapper">
				<div className="top-section">
					<div className="shadow">
						<div className="title">Aziz Jamaluddin Scholarship</div>
						<div className="description">
							<div><Icon type="calendar"/> Period: May 2020</div>
							<div><Icon type="idcard"/> Amount: $2.500</div>
							<div><Icon type="user"/> Sponsor: Aziz Jamaluddin</div>
							<div className="share-icons">
								<Icon type="twitter"/>
								<Icon type="share-alt"/>
							</div>
						</div>
					</div>
				</div>
				<div className="bottom-section">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ex enim, mollis sed maximus ut, consequat vel nisi. Vivamus tristique sodales lacinia. Nulla facilisi. Donec a neque porttitor est sollicitudin sagittis. Nulla sed sapien vitae diam sodales ornare nec vitae lorem.
					<Button type="primary" size="small">Enroll me</Button>
				</div>
			</div>
		</Col>
	)
	return (
		<div className="top-cards-wrapper">
			<Typography.Title level={4} className="title">Students: look for open scholarships or grants suitable for you</Typography.Title>
			<Row gutter={[16, 16]}>
			{props.cards.map((card: any, i: any) =>
				<TopCard key={i} />
			)}
			</Row>
		</div>
	)
}

const BottomCards: React.FC<any> = (props) => {
	const BottomCard: React.FC<any> = () => (
		<Col md={12} lg={8}>
			<div className="bottom-card-wrapper">
				<div className="top-section">
					<div className="user-wrapper">
						<div className="avatar">
							<Avatar size={42} icon="user" />
						</div>
						<div className="information">
							<Button className="name" type="link">Milliam Whitterson</Button>
							<div className="detail">Piscataway Township, NJ</div>
						</div>
					</div>
				</div>
				<div className="bottom-section">
					<div>
						Winner for: Oct 2019 Umrah + Cairo
					</div>
					<div>
						Sponsor: Masjid Ibraheem, NJ
					</div>
					<br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ex enim, mollis sed maximus ut, consequat vel nisi. Vivamus tristique sodales lacinia. Nulla facilisi. Donec a neque porttitor est sollicitudin sagittis. Nulla sed sapien vitae diam sodales ornare nec vitae lorem.
					<div className="share-icons">
						<Icon type="twitter"/>
						<Icon type="like"/>
						<Icon type="share-alt"/>
					</div>
				</div>
			</div>
		</Col>
	)
	return (
		<div className="bottom-cards-wrapper">
			<Typography.Title level={4} className="title">Hear from brothers & siters about getting umrah from our network</Typography.Title>
			<Row gutter={[16, 16]}>
			{props.cards.map((card: any, i: any) =>
				<BottomCard key={i} />
			)}
			</Row>
		</div>
	)
}

class Scholarships extends React.Component<any, any> {

	state = {
		offers: [{}, {}, {}, {}, {}]
	}

  componentDidMount() {
  }
  
  render() {
    return (
			<IqNavigation>
				<div id="scholarships-page">
					<Row className="max-sm-content">
						<Col xs={24}>
							<IqAdvertise />
							<ImageHeader />
							<TopCards cards={[{}, {}, {}, {}, {}]} />
							<BottomCards cards={[{}, {}, {}, {}, {}]} />
						</Col>
					</Row>

					<Row gutter={[24, 24]} className="min-md-content">
						<Col md={16}>
							<ImageHeader />
							<TopCards cards={[{}, {}, {}, {}, {}]} />
							<BottomCards cards={[{}, {}, {}, {}, {}]} />
						</Col>
						<Col md={8}>
							<IqAdvertise />
							<br/><br/>
							<IqOffers offers={this.state.offers} />
							<br/><br/>
						</Col>
					</Row>
				</div>
			</IqNavigation>
    );
  }
}
export default Scholarships;
