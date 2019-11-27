import React, { createContext } from 'react';

// default value for LoginContext
const LoginContext: any = createContext({
	visibleComponent: 'LoginLogin',
	updateVisibleComponent: () => { },
});

// LoginContext Provider
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

// LoginContext Consumer
export const LoginConsumer = LoginContext.Consumer;

// LoginContext HOC to passing loginContext as a props
export const withLoginContext = (Component: any) => {
	return (props: any) => {
		return (
			<LoginConsumer>
				{(loginContext: any) => {
					return <Component {...props} loginContext={loginContext} />;
				}}
			</LoginConsumer>
		);
	};
};