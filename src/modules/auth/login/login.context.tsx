import React, { createContext } from 'react';

// default value for LoginContext
const LoginContext: any = createContext({
  visibleComponent: 'LoginLogin',
  updateVisibleComponent: () => {},
});

// provider
export class LoginProvider extends React.Component {
  updateVisibleComponent = (newVisibleComponent: 'LoginLogin' | 'LoginPassword') => {
    this.setState({ visibleComponent: newVisibleComponent });
  };

  state = {
    visibleComponent: 'LoginLogin',
    updateVisibleComponent: this.updateVisibleComponent,
  };

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export const LoginConsumer = LoginContext.Consumer;