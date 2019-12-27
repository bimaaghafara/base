import React from 'react';
import './classifieds.scss';
import { IqNavigation } from '../../../shared/ui/iq-navigation/iq-navigation';


class Classifieds extends React.Component<any, any> {

	state = {
	}

  componentDidMount() {
  }
  
  render() {
    return (
			<IqNavigation>
				<div id="classifieds-page">
					classifieds
				</div>
			</IqNavigation>
    );
  }
}
export default Classifieds;
