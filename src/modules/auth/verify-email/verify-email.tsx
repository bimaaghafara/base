import React, { Fragment } from 'react';
import './verify-email.scss';

// components
import { VerifyYourEmail } from './components/verify-your-email';


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
    return (
      <div id="verify-email-page">
				<VerifyYourEmail></VerifyYourEmail>
				{/* <VerifyEmailProvider>
          <VerifyEmailConsumer>
            {({visibleComponent}: any) => (
              <Fragment>
								{visibleComponent === 'CreateYourAccount' &&
									<CreateYourAccount />
                }
								{visibleComponent === 'ConfirmYourEmail' &&
									<ConfirmYourEmail />
                }
							</Fragment>
						)}
					</VerifyEmailConsumer>
				</VerifyEmailProvider> */}
			</div>
    );
  }
}
export default VerifyEmail;
