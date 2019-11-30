
import React from 'react';
import '../login.scss';

// components
import { withLoginContext } from '../login.context';

// 3rd libs
import { Form, Icon, Input, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import Http from '../../../../core/http-client/http-client';

class LoginLoginForm extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}

	handleSubmit = (e: any) => {
		e.preventDefault();
		this.props.form.validateFields((err: any, values: any) => {
			if (!err) {
				Http.post('/api/RegisterUser', values)
				.then( res => {
					this.props.loginContext.updateVisibleComponent(this.props.loginContext.visibleComponent === 'LoginLogin' ? 'LoginPassword' : 'LoginLogin')
				}).catch(e => { 
					console.log(e);
				});
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const { loginContext } = this.props;

		return (
			<div id="login-login">
				<Form onSubmit={this.handleSubmit} className="login-form">
					<Form.Item>
						Sign In to continue
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('userNameEmail', {
							rules: [{ required: true, message: 'Please input your username / email!' }],
						})(
							<Input
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="Username / Email"
							/>,
						)}
					</Form.Item>
					<Form.Item>
						<div>
							<a
								className="login-form-forgot"
								onClick={() => {}}>
								Forgot email?
							</a>
						</div>
						<div style={{clear: 'both'}}>
							<Button
								type="default"
								className="create-account-button"
								onClick={() => {this.props.history.push('/create-account')}}>
								Create Account
							</Button>
							<Button
								type="primary"
								htmlType="submit"
								className="next-button"
								onClick={() => {}}>
								Next
							</Button>
						</div>
					</Form.Item>
				</Form>
			</div>
		);
	}

}

export const LoginLogin: any = Form.create({ name: 'LoginLogin' })(
	withLoginContext(
		withRouter(LoginLoginForm)
	)
);
