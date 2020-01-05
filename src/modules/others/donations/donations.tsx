import React, { Fragment } from 'react';
import './donations.scss';

// components
import { IqNavigation } from '../../../shared/ui/iq-navigation/iq-navigation';
import { IqAdvertise } from '../../../shared/ui/iq-advertise/iq-advertise';

// 3rd libs
import { Row, Col, Typography, Button, Icon, Avatar, Tabs } from 'antd';

const ImageHeader: React.FC<any> = () => (
	<div className="image-header-wrapper">
		<div className="image-header">
		</div>
		<div className="description">
			<Typography.Title level={3} className="text">There are many families that are urgently in need of your help this winter</Typography.Title>
			<Button type="primary">Give help now</Button>
		</div>
	</div>
);

const ImageHeaderDetail: React.FC<any> = () => (
	<div>
		<Typography.Title level={4}>Our community has helped many, here are some of the reports of previous donations</Typography.Title>
	</div>
)

const Paragraph: React.FC<any> = () => (
	<Fragment>
		<div className="grey-div">
			<Typography.Title level={4}>"Those who (in charity) spend of their goods by night and by day in secret and in public, have their reward with their Lord: on them shall be no fear, nor shall they grieve" (Al-Quran, 2:274)</Typography.Title>
		</div>
		<div className="transparent-div">
			<Typography.Title level={3}> Help those in need. Your donation will help families to continue with their lives</Typography.Title>
		</div>
	</Fragment>
)

const TabsDonation: React.FC<any> = () => (
	<Tabs type="card">
    <Tabs.TabPane tab="Monthly" key="monthly">
      Content for Monthly
    </Tabs.TabPane>
    <Tabs.TabPane tab="One-time" key="one-time">
      Content for One-time
    </Tabs.TabPane>
	</Tabs>
)

class Donations extends React.Component<any, any> {

	state = {
	}

  componentDidMount() {
  }
  
  render() {
    return (
			<IqNavigation>
				<div id="donations-page">
					<Row className="max-sm-content">
						<Col xs={24}>
							<IqAdvertise />
							<ImageHeader />
							<ImageHeaderDetail />
							<Paragraph />
							<TabsDonation />
						</Col>
					</Row>

					<Row gutter={[24, 24]} className="min-md-content">
						<Col md={16}>
							<ImageHeader />
							<ImageHeaderDetail />
							<Paragraph />
							<TabsDonation />
						</Col>
						<Col md={8}>
							<IqAdvertise />
						</Col>
					</Row>
				</div>
			</IqNavigation>
    );
  }
}
export default Donations;
