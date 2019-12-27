import React from 'react';
import './locals.scss';

// components
import { IqNavigation } from '../../../shared/ui/iq-navigation/iq-navigation';
import { LocalsList } from './locals-list/locals-list';
import { LocalsDetails } from './locals-details/locals-details';

// 3rd libs
import { Route, Redirect, Switch } from 'react-router-dom';

class Locals extends React.Component<any, any> {
	render() {
		return (
			<IqNavigation>
				<div id="locals-page">
					<Switch>
						<Route
							exact path={`${this.props.match.url}`}
							render={() => (<LocalsList />)}
						/>
						<Route
							path={`${this.props.match.url}/details/:id`}
							render={() => (<LocalsDetails />)}
						/>
						<Redirect to={`/not-found?url=${this.props.location.pathname}`} />
					</Switch>
				</div>
			</IqNavigation>
		);
	}
}

export default Locals;
