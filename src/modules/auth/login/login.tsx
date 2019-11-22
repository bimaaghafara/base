import React, { Fragment } from 'react';
import './login.scss';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

class LoginPassword extends React.Component<any, any> {
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
      <div id="login-page">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Passwordddd"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const LoginPasswordForm = Form.create({ name: 'LoginPassword' })(LoginPassword);

class LoginLogin extends React.Component<any, any> {
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
      <div>{this.props.loginForm.password} <Button type="primary" onClick={async () => {
        await this.props.loginForm.setPassword(Math.random()*999999999);
        this.props.loginForm.login();
      }}>LoginLogin</Button></div>
    );
  }
  
}
const LoginLoginForm: any = Form.create({ name: 'LoginLogin' })(LoginLogin);

class LoginForm extends React.Component<any, any> {
  state = {
    username: '',
    setPassword: this.setPassword.bind(this),
    password: 'passwordState',
    login: this.login.bind(this)
  };

  componentDidMount() {
  }

  async setUsername(username: string) {
    this.setState({username: username})
  }

  async setPassword(password: string) {
    this.setState({password: password})
  }

  login(){
    // call be service to login
    console.log(this.state)
  }

  render() {
    const loginForm = {
      password: this.state.password,
      login: this.login.bind(this),
      setUsername: this.setUsername.bind(this),
      setPassword: this.setPassword.bind(this)
    };
    return (
      <Fragment>
        {!this.state.username &&
          <div>
            Login Password
            <br/><br/>
            {/* <Button type="primary" onClick={ async () => {
              await this.setPassword('dsfdsfdsf');
              this.login();
            }}>tesss</Button>
            <Button type="primary" onClick={() => this.setUsername('usernameState')}>goToLoginPassword</Button> */}
            <LoginLoginForm loginForm={this.state}></LoginLoginForm>
          </div>
        }
        {this.state.username &&
          <LoginPasswordForm></LoginPasswordForm>
        }
      </Fragment>
    );
  }
}
export default LoginForm;
