import React from 'react';
import './scholarships.scss';
import IqNavigation from '../../../shared/ui/iq-navigation/IqNavigation';


class Scholarships extends React.Component<any, any> {

	state = {
	}

  componentDidMount() {
  }
  
  render() {
    return (
			<IqNavigation>
				<div id="scholarships-page">
					scholarships
				</div>
			</IqNavigation>
    );
  }
}
export default Scholarships;
