import React from 'react';

import { Button,Row, Col, Tabs, Select} from 'antd';
import { Title } from '../../locals/components/title/title';
import { IqAdvertise } from '../../../../shared/ui/iq-advertise/iq-advertise';
import { TopCategories } from '../components/top-categories/top-categories';
import { Result, LocationTitle } from '../components/result/result';
import { Search } from '../components/search/search';
import { ImageDetail } from '../components/image-detail/image-detail';
import { Location } from '../../locals/components/location/location';
import { Content } from '../components/content/content';
import { CalenderShare } from '../components/calender-share/calender-share';
import { Under } from '../components/under/under';

const TitleContent: React.FC<any> = (props) => {
    return (<h1 style={{fontWeight: 'bold', fontSize: 25}}>{props.name}</h1> )
}
export class ClassifiedsDetail extends React.Component<any, any> {

	state = {
		offers: [{}, {}, {}, {}, {}],
		populars: [{}, {}, {}, {}, {}],
        directory: [{}, {}, {}, {}, {}, {}, {}, {}],
        lists: [
            {
                title: 'Programmer needed for a very special project',
                date: '20 Dec',
                location: '406 Main Street, Boonton, NJ 07005'
            },
            {
                title: 'Programmer needed for a very special project',
                date: '21 Dec',
                location: '401 Main Street, Boonton, NJ 07005'
            }
        ],
		tabActiveKey: 'directory'
	}

	componentDidMount() {
		this.hideTabsPaneOnMobile();
	}

	hideTabsPaneOnMobile() {
		let nav: any = document.querySelector('.hidden-tab-pane .ant-tabs-bar');
		if (nav) {
			nav.style.display = 'none';
		}
	}

	render() {
		return (
			// need to watch screen size by js instead of css display none
			// so sm-content and md-content wont be rendered together
			// this will cause some component be rendered twice
			<div id="locals-page">
                <Row gutter={[24, 24]} className="sm-content">
                    <Col xs={24}>
                        <IqAdvertise />
                        <br />
						<Title style={{paddingLeft: 0}} />
						<br/>
						<Under />
						<br />
						<Row>
							<Col xs={13}><CalenderShare date='20th Dec' style={{paddingTop: 5}} /></Col>
							<Col md={11}><div style={{float:'right' }}><Button type='primary'>Contact Poster</Button></div></Col>
						</Row>
                        <TitleContent name='Lorem ipsum dolor sit amet, consectetur, adipiscing, elit, Aenen euismod' />
                        <LocationTitle name='406 Main Street, Boonton, NJ 070005' />
						<br/>
                        <ImageDetail images={['https://m.economictimes.com/thumb/msid-68157999,width-1200,height-900,resizemode-4,imgsize-121400/jobs-agencies.jpg', 'https://carleton.ca/career/wp-content/uploads/icon_job_postings.png']} />
						<br/>
						<Location style={{height: 320}} />
						<br />
						<Content />
						<br />
						<Row>
							<Col xs={13}><CalenderShare date='20th Dec' style={{paddingTop: 5}} /></Col>
							<Col md={11}><div style={{float:'right' }}><Button type='primary'>Contact Poster</Button></div></Col>
						</Row>
					</Col>
				</Row>
				<Row gutter={[24, 24]} className="md-content">
					<Col md={16}>
						<Title style={{paddingLeft: 0}} />
						<br/>
						<Under />
						<br />
						<Row>
							<Col md={6}><CalenderShare date='20th Dec' /></Col>
							<Col md={18}><div style={{float:'right' }}><Button type='primary'>Contact Poster</Button></div></Col>
						</Row>
                        <TitleContent name='Lorem ipsum dolor sit amet, consectetur, adipiscing, elit, Aenen euismod' />
                        <LocationTitle name='406 Main Street, Boonton, NJ 070005' />
						<Row>
							<Col md={16}>
								<ImageDetail images={['https://m.economictimes.com/thumb/msid-68157999,width-1200,height-900,resizemode-4,imgsize-121400/jobs-agencies.jpg', 'https://carleton.ca/career/wp-content/uploads/icon_job_postings.png']} />
							</Col>
							<Col md={8}>
								<Location style={{height: 320}} />
							</Col>
						</Row>
						<br />
						<Content />
						<br />
						<Row>
							<Col md={6}><CalenderShare date='20th Dec' /></Col>
							<Col md={18}><div style={{float:'right' }}><Button type='primary'>Contact Poster</Button></div></Col>
						</Row>
					</Col>
                    <Col md={8}>
						<IqAdvertise />
						<br /><br />
						
					</Col>
				</Row>
			</div>
		);
	}
}
