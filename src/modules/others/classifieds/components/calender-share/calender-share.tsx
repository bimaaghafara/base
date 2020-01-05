import React from 'react';

// 3rd libs
import { Row, Col, Input, Button, Select, Icon, Pagination } from 'antd';
export const CalenderShare: React.FC<any> = (props) => {
	return (
		<div style={props.style}>
            <Icon type='calendar' style={{fontSize: 20}} /> {props.date}
            <div style={{float: 'right'}}>
                <Icon type='twitter' style={{fontSize: 15, paddingLeft: 10}}></Icon> 
                <Icon type='share-alt' style={{fontSize: 15, paddingLeft: 10}}></Icon>
                <Icon type='star' style={{fontSize: 15, paddingLeft: 10}}></Icon>
            </div>
		</div>
	)
}