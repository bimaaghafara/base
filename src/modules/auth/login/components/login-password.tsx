import React from 'react';
import '../login.scss';

// components
import { withLoginContext } from '../login.context';

// 3rd libs
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class LoginPassword extends React.Component<any, any> {
	state = {};

	handleSubmit = (e: any) => {
		e.preventDefault();
		this.props.form.validateFields((err: any, values: any) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	login() {
		// call be service to login
		console.log(this.state)
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const { loginContext } = this.props;

		return (
			<div id="login-password">
				<Form onSubmit={this.handleSubmit} className="login-form">
					<Form.Item>
						{getFieldDecorator('username', {
							rules: [{ required: true, message: 'Please input your username!' }],
						})(
							<Input
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="Username"
							/>,
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('password', {
							rules: [{ required: true, message: 'Please input your Password!' }],
						})(
							<Input
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="password"
								placeholder="Password"
							/>,
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('remember', {
							valuePropName: 'checked',
							initialValue: true,
						})(<Checkbox>Remember me</Checkbox>)}
						<a className="login-form-forgot" href="">
							Forgot password?
						</a>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
							onClick={() => {
								loginContext.updateVisibleComponent(loginContext.visibleComponent === 'LoginLogin' ? 'LoginPassword' : 'LoginLogin')
							}}>
							Log in
						</Button>
						Or <a href="">register now!</a>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

export const LoginPasswordForm = Form.create({ name: 'LoginPassword' })(withLoginContext(LoginPassword));