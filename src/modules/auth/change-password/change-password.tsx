import React from 'react';
import './change-password.scss';

// components

// 3rd libs
import { Form, Icon, Input, Button } from 'antd';

class ChangePasswordForm extends React.Component<any, any> {
	state = {};

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

		return (
			<div id="change-password-page">
				<Form onSubmit={this.handleSubmit} className="change-password-form">
					<Form.Item>
						Change Password
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('newPassword', {
							rules: [{ required: true, message: 'Please input your New Password!' }],
						})(
							<Input
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="password"
								placeholder="New Password"
							/>,
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('confirmNewPassword', {
							rules: [{ required: true, message: 'Please confirm your new Password!' }],
						})(
							<Input
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="password"
								placeholder="Confirm New Password"
							/>,
						)}
					</Form.Item>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
							onClick={() => {}}>
							Change Password
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

export default Form.create({ name: 'changePassword' })(ChangePasswordForm);