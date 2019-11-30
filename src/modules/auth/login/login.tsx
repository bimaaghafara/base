import React, { Fragment } from 'react';
import './login.scss';

// components
import { LoginProvider, LoginConsumer } from './login.context';
import { LoginPassword } from './components/login-password';
import { LoginLogin } from './components/login-login';
import { ForgotPassword } from './components/forgot-password';


class Login extends React.Component<any, any> {
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
                  <LoginLogin></LoginLogin>
                }

                {visibleComponent === 'LoginPassword' &&
                  <LoginPassword></LoginPassword>
                }

								{visibleComponent === 'ForgotPassword' &&
                  <ForgotPassword></ForgotPassword>
                }

              </Fragment>
            )}
          </LoginConsumer>
        </LoginProvider>
      </div>
    );
  }
}
export default Login;
