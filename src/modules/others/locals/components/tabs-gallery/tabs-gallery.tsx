import React from 'react';
import { Tabs } from 'antd';

// 3rd libs

export const TabsGalery: React.FC<any> = () => {
	return (
		<Tabs>
			<Tabs.TabPane tab="Food Service" key="foodService" />
			<Tabs.TabPane tab="Schools" key="schools" />
			<Tabs.TabPane tab="Markets" key="markets" />
			<Tabs.TabPane tab="Mosques" key="mosques" />
			<Tabs.TabPane tab="News & Acitivites" key="newsAcitivites" />
			<Tabs.TabPane tab="People" key="people" />
			<Tabs.TabPane tab="Others" key="others" />
		</Tabs>
	)
}