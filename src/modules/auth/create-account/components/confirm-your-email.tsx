import React from 'react';
import './create-your-account.scss';

// 3rd libs
import { Form, Icon, Input, Button, DatePicker, Select, AutoComplete } from 'antd';
import { withRouter } from 'react-router-dom';

class ConfirmYourEmailForm extends React.Component<any, any> {

	render() {

		return (
			<div id="confirm-your-email">
				<div className="create-your-account-form">
					<h2>Confirm Your Email</h2>
					<p>
						Please check your email for a confirmation email.
					</p>
					<div style={{clear: 'both'}}>
						<Button
							type="default"
							className="create-account-button"
							onClick={() => {this.props.history.push('/verify-email')}}>
							Continue
						</Button>
						<Button
							type="primary"
							htmlType="submit"
							className="next-button"
							onClick={() => {}}>
							Resend Email
						</Button>
					</div>
				</div>
			</div>
		)
	}
}

export const ConfirmYourEmail: any = (withRouter(ConfirmYourEmailForm));