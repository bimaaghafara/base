import React from 'react';
import './news-activities.scss';
import { IqNavigation } from '../../../shared/ui/iq-navigation/iq-navigation';


class NewsActivities extends React.Component<any, any> {

	state = {
	}

  componentDidMount() {
  }
  
  render() {
    return (
			<IqNavigation>
				<div id="news-activities-page">
					news-activities
				</div>
			</IqNavigation>
    );
  }
}
export default NewsActivities;
