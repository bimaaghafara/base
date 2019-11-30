import React, { createContext } from 'react';

type VisibleComponent = 'CreateYourAccount' | 'ConfirmYourEmail';

// default value for CreateAccountContext
const CreateAccountContext: any = createContext({
	visibleComponent: 'CreateYourAccount',
	updateVisibleComponent: () => { },
});

// CreateAccountContext Provider
export class CreateAccountProvider extends React.Component {
	updateVisibleComponent = (newVisibleComponent: VisibleComponent) => {
		this.setState({ visibleComponent: newVisibleComponent });
	};

	state = {
		visibleComponent: 'CreateYourAccount',
		updateVisibleComponent: this.updateVisibleComponent,
	};

	render() {
		return (
			<CreateAccountContext.Provider value={this.state}>
				{this.props.children}
			</CreateAccountContext.Provider>
		);
	}
}

// CreateAccountContext Consumer
export const CreateAccountConsumer = CreateAccountContext.Consumer;

// CreateAccountContext HOC to passing createAccountContext as a props
export const withCreateAccountContext = (Component: any) => {
	return (props: any) => {
		return (
			<CreateAccountConsumer>
				{(createAccountContext: any) => {
					return <Component {...props} createAccountContext={createAccountContext} />;
				}}
			</CreateAccountConsumer>
		);
	};
};