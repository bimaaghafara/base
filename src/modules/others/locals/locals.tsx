import React from 'react';
import './locals.scss';
import IqNavigation from '../../../shared/ui/iq-navigation/IqNavigation';


class Locals extends React.Component<any, any> {

	state = {
	}

  componentDidMount() {
  }
  
  render() {
    return (
			<IqNavigation>
				<div id="locals-page">
					locals
				</div>
			</IqNavigation>
    );
  }
}
export default Locals;
