import React from 'react';
import './title.scss';

// 3rd libs
import { Breadcrumb, Icon } from 'antd';

export const Title: React.FC<any> = (props) => {
	return (
		<div className="title-wrapper">
			<Breadcrumb className="breadcrumb" style={props.style}>
				<Breadcrumb.Item href="">
					<Icon type="global" />
				</Breadcrumb.Item>
				<Breadcrumb.Item href="">
					<span>USA</span>
				</Breadcrumb.Item>
				<Breadcrumb.Item href="">
					<span>New Jersey</span>
				</Breadcrumb.Item>
				<Breadcrumb.Item>
					North Jersey
				</Breadcrumb.Item>
			</Breadcrumb>
		</div>
	)
}