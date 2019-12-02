import React from 'react';
import '../login.scss';

// components
import { withLoginContext } from '../login.context';

// 3rd libs
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import Http from '../../../../core/http-client/http-client';

class LoginPasswordForm extends React.Component<any, any> {
	state = {};

	handleSubmit = (e: any) => {
		e.preventDefault();
		this.props.form.validateFields((err: any, values: any) => {
			if (!err) {
				Http.post('/api/LoginUser', values)
				.then( res => {
					this.props.loginContext.updateVisibleComponent(this.props.loginContext.visibleComponent === 'LoginLogin' ? 'LoginPassword' : 'LoginLogin')
				}).catch(e => { 
					console.log(e);
				});
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
						Welcome
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('userNameEmail', {
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
						{getFieldDecorator('rememberMe', {
							valuePropName: 'checked',
							initialValue: true,
						})(<Checkbox>Remember me</Checkbox>)}
						<a
							className="login-form-forgot"
							onClick={() => loginContext.updateVisibleComponent('ForgotPassword')}>
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
					</Form.Item>
				</Form>
			</div>
		);
	}
}

export const LoginPassword = Form.create({ name: 'LoginPassword' })(withLoginContext(LoginPasswordForm));