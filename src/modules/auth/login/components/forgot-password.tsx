
import React from 'react';
import '../login.scss';

// components
import { withLoginContext } from '../login.context';

// 3rd libs
import { Form, Icon, Input, Button } from 'antd';
import { withRouter } from 'react-router-dom';

import Http from '../../../../core/http-client/http-client';

class ForgotPasswordForm extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}

	handleSubmit = (e: any) => {
		e.preventDefault();
		this.props.form.validateFields((err: any, values: any) => {
			if (!err) {
				Http.post('/api/ManageUserPassword/ForgotPassword', values)
				.then( res => {
					this.props.history.push('/change-password')
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
			<div id="forgot-password">
				<Form onSubmit={this.handleSubmit} className="login-form">
					<Form.Item>
						Enter Email:
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('email', {
							rules: [{ required: true, message: 'Please input your email address!' }],
						})(
							<Input
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="Username"
							/>,
						)}
					</Form.Item>
					<Form.Item>
						<div style={{clear: 'both'}}>
							<Button
								type="default"
								className="back-button"
								onClick={() => loginContext.updateVisibleComponent('LoginPassword')}>
								Back
							</Button>
							<Button
								type="primary"
								htmlType="submit"
								className="next-button"
								onClick={() => {
									//this.props.history.push('/change-password')
								}}>
								Next
							</Button>
						</div>
					</Form.Item>
				</Form>
			</div>
		);
	}

}

export const ForgotPassword: any = Form.create({ name: 'ForgotPassword' })(
	withLoginContext(
		withRouter(ForgotPasswordForm)
	)
);
