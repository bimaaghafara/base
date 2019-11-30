import React, { Fragment } from 'react';
import './create-account.scss';

// components
import { CreateAccountProvider, CreateAccountConsumer } from './create-account.context';
import { CreateYourAccount } from './components/create-your-account';
import { ConfirmYourEmail } from './components/confirm-your-email';


class CreateAccount extends React.Component<any, any> {
  state = {};

  componentDidMount() {
  }
  
  render() {
    return (
      <div id="create-account-page">
				<CreateAccountProvider>
          <CreateAccountConsumer>
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
					</CreateAccountConsumer>
				</CreateAccountProvider>
			</div>
    );
  }
}
export default CreateAccount;
