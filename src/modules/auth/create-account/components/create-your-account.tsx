import React from 'react';
import './create-your-account.scss';

// 3rd libs
import { Form, Icon, Input, Button, DatePicker, Select, AutoComplete } from 'antd';
import { withRouter } from 'react-router-dom';
import { withCreateAccountContext } from '../create-account.context';

class CreateYourAccountForm extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}

	handleSubmit = (e: any) => {
		e.preventDefault();
		this.props.form.validateFields((err: any, values: any) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const { createAccountContext } = this.props;

		return (
			<div id="confirm-your-account">
				<Form onSubmit={this.handleSubmit} className="create-your-account-form">
					<Form.Item>
						Create your account:
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('firstName', {
							rules: [{ required: true, message: 'Please input your first name!' }],
						})(
							<Input placeholder="First name"/>,
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('lastName', {
							rules: [{ required: true, message: 'Please input your last name!' }],
						})(
							<Input placeholder="Last name"/>,
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('userName', {
							rules: [{ required: true, message: 'Please input your username!' }],
						})(
							<Input placeholder="Username"/>,
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('password', {
							rules: [{required: true, message: 'Please input your password!'}],
						})(
							<Input.Password
								prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
								placeholder="Password"
							/>
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('confrimPassword', {
							rules: [{required: true, message: 'Please confirm your password!'}],
						})(
							<Input.Password
								prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
								placeholder="Confirm Password"
							/>
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('phoneNumber', {
							rules: [{ required: true, message: 'Please input your phone number!' }],
						})(<Input placeholder="Phone Number"/>)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('date-picker', {
							rules: [{ type: 'object', required: true, message: 'Please select time!' }],
						})(<DatePicker placeholder="Date of Birth" style={{'width': '100%'}}/>)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('gender', {
							rules: [{ required: true, message: 'Please select your gender!' }],
						})(
							<Select
								placeholder="Select a Gender"
							>
								<Select.Option value="male">male</Select.Option>
								<Select.Option value="female">female</Select.Option>
							</Select>,
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('country', {
							rules: [{ required: true, message: 'Please select your country!' }],
						})(
							<AutoComplete
								dataSource={['USA', 'Indonesia', 'Singapore', 'China']}
								placeholder="Country"
								filterOption={(inputValue: any, option:any) =>
									option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
								}
							/>
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('Address', {
							rules: [{ required: true, message: 'Please input your Address!' }],
						})(
							<Input.TextArea placeholder="Address" rows={3}/>,
						)}
					</Form.Item>

					<Form.Item>
						<div style={{clear: 'both'}}>
							<Button
								type="default"
								className="back-button"
								onClick={() => {this.props.history.goBack()}}>
								Sign in instead
							</Button>
							<Button
								type="primary"
								htmlType="submit"
								className="next-button"
								onClick={() => {createAccountContext.updateVisibleComponent('ConfirmYourEmail')}}>
								Next
							</Button>
						</div>
					</Form.Item>
				</Form>
			</div>
		)
	}
}

export const CreateYourAccount: any = Form.create({ name: 'CreateYourAccount' })(
	withRouter(
		withCreateAccountContext(CreateYourAccountForm)
	)
);