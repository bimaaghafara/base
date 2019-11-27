import React from 'react';
import './create-your-account.scss';

// 3rd libs
import { Form, Icon, Input, Button } from 'antd';
import { withRouter } from 'react-router-dom';

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

		return (
			<div id="create-your-account">
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
							<Input placeholder="last name"/>,
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
								onClick={() => {}}>
								Next
							</Button>
						</div>
					</Form.Item>
				</Form>
			</div>
		)
	}
}

export const CreateYourAccount: any = Form.create({ name: 'CreateYourAccount' })(withRouter(CreateYourAccountForm));