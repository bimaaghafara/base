import React from 'react';
import './classifieds.scss';

// components
import { IqNavigation } from '../../../shared/ui/iq-navigation/iq-navigation';
import { ClassifiedsList } from './classifieds-list/classifieds-list';

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
							render={() => (<ClassifiedsList />)}
						/>
						{/* <Route
							path={`${this.props.match.url}/details/:id`}
							render={() => (<LocalsDetails />)}
						/> */}
						<Redirect to={`/not-found?url=${this.props.location.pathname}`} />
					</Switch>
				</div>
			</IqNavigation>
		);
	}
}

export default Locals;
