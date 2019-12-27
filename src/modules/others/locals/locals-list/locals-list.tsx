import React from 'react';
// import './locals.scss';

// components
import { DirectorySearch } from '../components/directory-search/directory-search';
import { Title } from '../components/title/title';
import { Location } from '../components/location/location';
import { IqOffers } from '../../../../shared/ui/iq-offers/iq-offers';
import { Popular } from '../components/populars/populars';
import { SortBy } from '../components/sort-by/sort-by';
import { TabsGalery } from '../components/tabs-gallery/tabs-gallery';
import { DirectoryList } from '../components/directory-list/directory-list';
import { IqAdvertise } from '../../../../shared/ui/iq-advertise/iq-advertise';

// 3rd libs
import { Row, Col, Tabs, Select} from 'antd';


export class LocalsList extends React.Component<any, any> {

	state = {
		offers: [{}, {}, {}, {}, {}],
		populars: [{}, {}, {}, {}, {}],
		directory: [{}, {}, {}, {}, {}, {}, {}, {}],
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
				<Row className="sm-content">
					<Col xs={24}>
						<Title />
						<br />
						<IqAdvertise />
						<br />
						<DirectorySearch />
					</Col>
					<Col xs={24}>
						<TabsGalery />
					</Col>
					<Col xs={4}>
						<Select
							style={{ marginBottom: '16px' }}
							defaultValue="directory"
							onChange={(value:any) => this.setState({ tabActiveKey: value })}
						>
							<Select.Option value="directory">Directory</Select.Option>
							<Select.Option value="offers">Offers</Select.Option>
							<Select.Option value="popularList">Popular List</Select.Option>
						</Select>
					</Col>
					<Col xs={20}>
						<SortBy/>
					</Col>
					<Col xs={24}>
						<br />
						<Location />
					</Col>
					<Col xs={24}>
						<Tabs activeKey={this.state.tabActiveKey} className="hidden-tab-pane">
							<Tabs.TabPane tab="Directory" key="directory">
								<DirectoryList directory={this.state.directory} />
							</Tabs.TabPane>
							<Tabs.TabPane tab="Offers" key="offers">
								<IqOffers offers={this.state.offers} />
							</Tabs.TabPane>
							<Tabs.TabPane tab="Popular List" key="popularList">
								<Popular populars={this.state.populars} />
							</Tabs.TabPane>
						</Tabs>
					</Col>
				</Row>

				<Row gutter={[24, 24]} className="md-content">
					<Col md={16}>
						<Title />
						<DirectorySearch />
						<Row gutter={[24, 24,]}>
							<Col md={24}>
								<SortBy />
							</Col>
							<Col md={24}>
								<TabsGalery />
							</Col>
						</Row>
						<Location />
						<DirectoryList directory={this.state.directory} />
					</Col>
					<Col md={8}>
						<IqAdvertise />
						<br /><br />
						<IqOffers offers={this.state.offers} />
						<br /><br />
						<Popular populars={this.state.populars} />
					</Col>
				</Row>
			</div>
		);
	}
}
