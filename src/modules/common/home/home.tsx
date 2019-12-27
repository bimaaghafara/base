import React from 'react';

// styles
import './home.scss';

// 3rd libs
import { Carousel, Card, Button, Form, Modal, Input, Radio, Row, Col, Typography } from 'antd';
import { withRouter } from 'react-router-dom';
import { IqNavigation } from '../../../shared/ui/iq-navigation/iq-navigation';

const { Title } = Typography;

const SubscriptionModal: any = Form.create({ name: 'form_in_modal' })(
	class extends React.Component<any, any> {
		render() {
			const { visible, onCancel, onCreate, form } = this.props;
			const { getFieldDecorator } = form;
			return (
				<Modal
					visible={visible}
					title="Subscribe to our services!"
					okText="Subscribe"
					onCancel={onCancel}
					onOk={onCreate}
				>
					<Form layout="vertical">
						<Form.Item label="FullName">
							{getFieldDecorator('fullName', {
								rules: [{ required: true, message: 'Please input your full name!' }],
							})(<Input />)}
						</Form.Item>
						<Form.Item label="E-mail">
							{getFieldDecorator('email', {
								rules: [{ required: true, message: 'Please input your email!' }],
							})(<Input />)}
						</Form.Item>
						<Form.Item label="PhoneNo">
							{getFieldDecorator('phoneNo', {
								rules: [{ required: true, message: 'Please input your phone number!' }],
							})(<Input />)}
						</Form.Item>
						<Form.Item label="Address">
							{getFieldDecorator('address')(<Input type="textarea" />)}
						</Form.Item>
						<Form.Item className="collection-create-form_last-form-item">
							{getFieldDecorator('modifier', {
								initialValue: 'print',
							})(
								<Radio.Group>
									<Radio value="print">Print Edition</Radio>
									<Radio value="digital">Digital Edition</Radio>
								</Radio.Group>,
							)}
						</Form.Item>
					</Form>
				</Modal>
			);
		}
	},
);

class Home extends React.Component<any, any> {

	state = {
		visible: false
	};

	carouselRef: any;
	formRef: any;

	showConfirm = () => {
		this.handleCancel();
		const props = this.props;
		Modal.confirm({
			title: 'Seemed that you haven\'t already a member',
			content: 'Please create an account to get more services from us!',
			okText: 'Yes, create an account',
			cancelText: 'No, not now',
			onOk() {
				props.history.push('/create-account');
			},
			onCancel() {
				Modal.success({
					content: <div>
								You have been successfully subscribed to our service. 
								<br/>
								<br/>
								<br/>
							  	Please check your email for the next steps!
							</div>
				});
			},
		});
	}

	showModal = () => {
		this.setState({ visible: true });
	};

	handleCancel = () => {
		this.setState({ visible: false });
	};

	handleCreate = () => {
		const { form } = this.formRef.props;
		form.validateFields((err: any, values: any) => {
			if (err) {
				return;
			}

			this.showConfirm();
			console.log('Received values of form: ', values);
			form.resetFields();
			this.setState({ visible: false });
		});
	};

	saveFormRef = (formRef: any) => {
		this.formRef = formRef;
	};

	render() {
		const newsList = [{
			date: 'POSTED ON: NEWS | 29 OKT 2019',
			description: 'Lorem ipsum dolor sit amet, consectetur'
		}, {
			date: 'POSTED ON: NEWS | 29 OKT 2019',
			description: 'Lorem ipsum dolor sit amet, consectetur'
		}, {
			date: 'POSTED ON: NEWS | 29 OKT 2019',
			description: 'Lorem ipsum dolor sit amet, consectetur'
		}, {
			date: 'POSTED ON: NEWS | 29 OKT 2019',
			description: 'Lorem ipsum dolor sit amet, consectetur'
		}];

		const donations = [{
			value: '$5',
			description: 'Lorem ipsum dolor sit amet,'
		}, {
			value: '$10',
			description: 'Lorem ipsum dolor sit amet,'
		}, {
			value: '$15',
			description: 'Lorem ipsum dolor sit amet,'
		}]

		return (
			<IqNavigation>
				<div id="home">
					<h1>Welcome to Muslim Community Network</h1>
					<div className="carousel-wrapper">
						<Carousel ref={c => (this.carouselRef = c)}>
							<div className="carousel-content">
								<ul>
									<li>
										<h1>Win an Umrah</h1>
									</li>
									<li className="inline-item">
										<Button type="primary" size="large" onClick={this.showModal}>
											Enroll me
										</Button>
									</li>
									<li className="inline-item">
										<Button type="danger" size="large" onClick={this.showModal}>
											I want to sponsor
										</Button>
									</li>
								</ul>
							</div>
							<div className="carousel-content">
								<ul>
									<li>
										<h1>Win Sholarships</h1>
									</li>
									<li className="inline-item">
										<Button type="primary" size="large" onClick={this.showModal}>
											Enroll me
										</Button>
									</li>
									<li className="inline-item">
										<Button type="danger" size="large" onClick={this.showModal}>
											I want to sponsor
										</Button>
									</li>
								</ul>
							</div>
						</Carousel>
						<Button className="carousel-prev" shape="circle" icon="left" onClick={() => this.carouselRef.prev()}/>
						<Button className="carousel-next" shape="circle" icon="right" onClick={() => this.carouselRef.next()}/>
					</div>
					<div className="news-stories">
						<Button className="see-all-news" type="link">See All News</Button>
						<Title level={2}>News & Stories</Title>
						<hr/>
						<Row>
							{newsList.map((news, i) => (
								<Col key={i} className="news-wrapper" xs={24} sm={24} md={12} lg={6}>
									<Col xs={12} md={24}>
										<div className="news-img"></div>
									</Col>
									<Col xs={12} md={24}>
										<div className="news-date">{news.date}</div>
										<div className="news-description">{news.description}</div>
									</Col>
								</Col>
							))}
						</Row>
					</div>
					<div className="donate-support">
						<Button className="see-all-donations" type="link">See All Donations</Button>
						<Title level={2}>Donate & Support Our Work Today</Title>
						<hr/>
						<Row>
							{donations.map((donation, i) => (
								<Col key={i} className="donation-wrapper" xs={24} sm={24} md={12} lg={6}>
									<Col xs={12} md={24}>
										<div className="donation-value"><Title level={2}>{donation.value}</Title></div>
										<div className="donation-description"><Title level={3}>{donation.description}</Title></div>
									</Col>
									<Col xs={12} md={24}>
										<Radio.Group>
											<Radio style={{display: 'block'}} value={1}>
												Lorem ipsum dolor sitt
											</Radio>
											<Radio style={{display: 'block'}} value={2}>
												Lorem ipsum dolor sitt
											</Radio>
											<Radio style={{display: 'block'}} value={3}>
												Lorem ipsum dolor sitt
											</Radio>
										</Radio.Group>
										<Button className="donate-now" type="primary">Donate Now</Button>
									</Col>
								</Col>
							))}
							<Col className="donation-wrapper" xs={24} sm={24} md={12} lg={6}>
									<Col xs={12} md={24}>
										<div className="donation-description">
											<Title level={3}>
												We don't have the amount you're looking for?
											</Title>
										</div>
									</Col>
									<Col xs={12} md={24}>
										<Button className="donate-right" shape="circle" icon="right"/>
										<Button className="donate-now" type="link">Donate another amount</Button>
									</Col>
								</Col>
						</Row>
					</div>
				</div>

				<SubscriptionModal
					wrappedComponentRef={this.saveFormRef}
					visible={this.state.visible}
					onCancel={this.handleCancel}
					onCreate={this.handleCreate}
				/>
			</IqNavigation>
		)
	}
}

export default withRouter(Home);
