import React from 'react';
import './magazine.scss';
import IqNavigation from '../../../shared/ui/iq-navigation/IqNavigation';


class Magazine extends React.Component<any, any> {

	state = {
	}

  componentDidMount() {
  }
  
  render() {
    return (
			<IqNavigation>
				<div id="magazine-page">
					magazine
				</div>
			</IqNavigation>
    );
  }
}
export default Magazine;
