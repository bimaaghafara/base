import React from 'react';
import { Select } from 'antd';

// 3rd libs

export const SortBy: React.FC<any> = () => {
	return (
		<div className="tags-wrapper" style={{ float: 'right' }}>
			<span>Sort by: </span>
			<Select className="tags" defaultValue="rating">
				<Select.Option value="rating">Rating</Select.Option>
				<Select.Option value="a-z">A-Z</Select.Option>
				<Select.Option value="newest">Newest</Select.Option>
				<Select.Option value="best-offers">Best Offers</Select.Option>
			</Select>
			<span>&nbsp;</span>
			<Select className="tags" defaultValue="map-view">
				<Select.Option value="map-view">Map View</Select.Option>
				<Select.Option value="list-view">List View</Select.Option>
				<Select.Option value="both-view">Both Map & List</Select.Option>
			</Select>
		</div>
	)
}