import React from 'react';

// styles
import './home.scss';

// 3rd libs
import { Carousel, Card, Button } from 'antd';
import IqNavigation from '../../../shared/ui/iq-navigation/IqNavigation';


class Home extends React.Component<any, any> {

	state = {
	};
  
  render() {
    return (
			<IqNavigation>
				<div id="home">
					<h1>Welcome to Muslim Community Network</h1>
					<Carousel autoplay>
						<div>
							<Card className="transparent">
								<h1>Win an Umrah</h1>
								<Button type="primary" size="large">
									Enroll me
								</Button>
								<Button type="danger" size="large">
									I want to Sponsor
								</Button>
							</Card>
						</div>
						<div>
							<Card className="transparent">
								<h1>Win a Sholarships</h1>
								<Button type="primary" size="large">
									Learn More
								</Button>
							</Card>
						</div>
					</Carousel>
				</div>
			</IqNavigation>
		)
	}
}

export default Home;
