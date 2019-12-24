import React from 'react';
// import './locals.scss';

// components
import { DirectorySearch } from '../components/directory-search/directory-search';
import { TitleWrapper } from '../components/title-wrapper/title-wrapper';
import { AdvertiseWrapper } from '../components/advertise-wrapper/advertise-wrapper';
import { AdvertiseMobileWrapper } from '../components/advertise-mobile-wrapper/advertise-mobile-wrapper';
import { LocationsWrapper } from '../components/location-wrapper/location-wrapper';
import { OffersWrapper } from '../components/offers-wrapper/offers-wrapper';
import { PopularWrapper } from '../components/populars-wrapper/populars-wrapper';
import { SortByWrapper } from '../components/sort-by-wrapper/sort-by-wrapper';
import { TabsGalery } from '../components/tabs-gallery/tabs-gallery';
import { DirectoryDetail } from '../components/directory-detail/directory-detail';

// 3rd libs
import { Row, Col, Tabs, Select} from 'antd';


export class LocalsDetails extends React.Component<any, any> {

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
						<TitleWrapper />
						<br />
						<AdvertiseMobileWrapper />
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
						<SortByWrapper/>
					</Col>
					<Col xs={24}>
						<br />
						<LocationsWrapper />
					</Col>
					<Col xs={24}>
						<Tabs activeKey={this.state.tabActiveKey} className="hidden-tab-pane">
							<Tabs.TabPane tab="Directory" key="directory">
								<DirectoryDetail />
							</Tabs.TabPane>
							<Tabs.TabPane tab="Offers" key="offers">
								<OffersWrapper offers={this.state.offers} />
							</Tabs.TabPane>
							<Tabs.TabPane tab="Popular List" key="popularList">
								<PopularWrapper populars={this.state.populars} />
							</Tabs.TabPane>
						</Tabs>
					</Col>
				</Row>

				<Row gutter={[24, 24]} className="md-content">
					<Col md={16}>
						{/* <TitleWrapper />
						<DirectorySearch />
						<Row gutter={[24, 24,]}>
							<Col md={24}>
								<SortByWrapper />
							</Col>
							<Col md={24}>
								<TabsGalery />
							</Col>
						</Row>
						<LocationsWrapper /> */}
						<DirectoryDetail />
					</Col>
					<Col md={8}>
						<AdvertiseWrapper />
						<br /><br />
						<OffersWrapper offers={this.state.offers} />
						<br /><br />
						<PopularWrapper populars={this.state.populars} />
					</Col>
				</Row>
			</div>
		);
	}
}
