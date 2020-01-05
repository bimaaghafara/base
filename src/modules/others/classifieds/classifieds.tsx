import React from 'react';
import './classifieds.scss';
import { IqNavigation } from '../../../shared/ui/iq-navigation/iq-navigation';
import { ClassifiedsList } from './classifieds-list/classifieds-list';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ClassifiedsDetail } from './classifieds-detail/classifieds-detail';


class Classifieds extends React.Component<any, any> {
	render() {
		console.log(`${this.props.match.url}`)
		return (
			<IqNavigation>
				<div id="locals-page">
					<Switch>
						<Route
							exact path={`${this.props.match.url}`}
							render={() => (<ClassifiedsList />)}
						/>
						<Route
							path={`${this.props.match.url}/details/:id`}
							render={() => (<ClassifiedsDetail />)}
						/>
						<Redirect to={`/not-found?url=${this.props.location.pathname}`} />
					</Switch>
				</div>
			</IqNavigation>
    );
  }
}
export default Classifieds;
