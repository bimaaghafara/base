import React, { Fragment } from 'react';
import './verify-email.scss';

// components
import { VerifyYourEmail } from './components/verify-your-email';
import Congratulation from './components/congratulation';


class VerifyEmail extends React.Component<any, any> {

	state = {
		visibleComponent: 'VerifyYourEmail'
	}

	updateVisibleComponent(visibleComponent: any) {
		this.setState({visibleComponent: visibleComponent})
	}

  componentDidMount() {
  }
  
  render() {
		const {visibleComponent} = this.state;
    return (
      <div id="verify-email-page">
				{visibleComponent === 'VerifyYourEmail' &&
					<VerifyYourEmail updateVisibleComponent={this.updateVisibleComponent.bind(this)} />
				}
				{visibleComponent === 'Congratulations' &&
					<Congratulation />
				}
			</div>
    );
  }
}
export default VerifyEmail;
