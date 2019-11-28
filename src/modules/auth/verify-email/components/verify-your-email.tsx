
import React from 'react';
import './verify-your-email.scss';

// components

// 3rd libs
import { Form, Icon, Input, Button } from 'antd';
import { withRouter } from 'react-router-dom';

class VerifyYourEmailForm extends React.Component<any, any> {
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

		return (
			<div id="verify-email-page">
				<Form onSubmit={this.handleSubmit} className="verify-your-email-form">
					<Form.Item>
						Verify your email address
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('verificationCode', {
							rules: [{ required: true, message: 'Please input your verification code!' }],
						})(
							<Input
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="Enter Code"
							/>,
						)}
					</Form.Item>
					<Form.Item>
						<div style={{clear: 'both'}}>
							<Button
								type="default"
								className="back-button"
								onClick={() => {}}>
								Back
							</Button>
							<Button
								type="primary"
								htmlType="submit"
								className="verify-button"
								onClick={() => {}}>
								Verify
							</Button>
						</div>
					</Form.Item>
				</Form>
			</div>
		);
	}

}

export const VerifyYourEmail: any = Form.create({ name: 'VerifyYourEmail' })(
	withRouter(VerifyYourEmailForm)
);
