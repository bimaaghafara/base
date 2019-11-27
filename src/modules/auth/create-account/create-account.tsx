import React, { Fragment } from 'react';
import './create-account.scss';
import { CreateYourAccount } from './components/create-your-account';

// components


class CreateAccount extends React.Component<any, any> {
  state = {};

  componentDidMount() {
  }
  
  render() {
    return (
      <div id="create-account-page">
        <CreateYourAccount></CreateYourAccount>
			</div>
    );
  }
}
export default CreateAccount;
