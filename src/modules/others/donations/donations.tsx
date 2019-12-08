import React from 'react';
import './donations.scss';
import IqNavigation from '../../../shared/ui/iq-navigation/IqNavigation';


class Donations extends React.Component<any, any> {

	state = {
	}

  componentDidMount() {
  }
  
  render() {
    return (
			<IqNavigation>
				<div id="donations-page">
					donations
				</div>
			</IqNavigation>
    );
  }
}
export default Donations;
