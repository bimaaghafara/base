import React, { Fragment } from 'react';
import './login.scss';
import { LoginProvider, LoginConsumer } from './login.context';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { LoginPasswordForm } from './components/login-password';
import { LoginLoginForm } from './components/login-login';

class LoginForm extends React.Component<any, any> {
  state = {};

  componentDidMount() {
  }
  
  render() {
    return (
      <div id="login-page">
        <LoginProvider>
          <LoginConsumer>
            {({visibleComponent}: any) => (
              <Fragment>
                {visibleComponent === 'LoginLogin' &&
                  <LoginLoginForm></LoginLoginForm>
                }

                {visibleComponent === 'LoginPassword' &&
                  <LoginPasswordForm></LoginPasswordForm>
                }

              </Fragment>
            )}
          </LoginConsumer>
        </LoginProvider>
      </div>
    );
  }
}
export default LoginForm;
