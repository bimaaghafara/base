import React from 'react';

import { Row, Col, Tabs, Select} from 'antd';
import { Title } from '../../locals/components/title/title';
import { IqAdvertise } from '../../../../shared/ui/iq-advertise/iq-advertise';
import { TopCategories } from '../components/top-categories/top-categories';
import { Result } from '../components/result/result';
import { Search } from '../components/search/search';


export class ClassifiedsList extends React.Component<any, any> {

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
                <h1 style={{fontWeight: 'bold', fontSize: 25}}>Find things and services you need in your area</h1>
                <Row gutter={[24, 24]} className="sm-content">
                    <Col xs={24}>
						<Title />
						<br />
						<IqAdvertise />
						<br />
                        <Search />
                        <br />
                        
						<TopCategories />
                        <br />
                        <Result name='Job Listing' lists={this.state.lists} />
					</Col>
				</Row>
				<Row gutter={[24, 24]} className="md-content">
					<Col md={16}>
						<Title />
                        <br />
                        <Search />
                        <br />
                        <TopCategories />
                        <br />
                        <Result name='Job Listing' lists={this.state.lists} />
						
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
