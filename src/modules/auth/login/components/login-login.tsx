
import React, { Fragment } from 'react';
import '../login.scss';
import { LoginProvider, LoginConsumer, withLoginContext } from '../login.context';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class LoginLogin extends React.Component<any, any> {
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
		const { loginContext } = this.props;

		return (
			<div id="login-login">
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
						<Button
							type="default"
							className="create-account-button"
							onClick={() => {}}>
							Create Account
						</Button>
						<Button
							type="primary"
							htmlType="submit"
							className="next-button"
							onClick={() => {
							loginContext.updateVisibleComponent(loginContext.visibleComponent === 'LoginLogin' ? 'LoginPassword' : 'LoginLogin')
						}}>
							Next
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}

}

export const LoginLoginForm: any = Form.create({ name: 'LoginLogin' })(withLoginContext(LoginLogin));
