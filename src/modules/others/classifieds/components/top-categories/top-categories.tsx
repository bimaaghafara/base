import React from 'react';

// 3rd libs
import { Row, Col, Input, Button, Tabs } from 'antd';

export const TopCategories: React.FC<any> = () => {
	return (
		<div className="top-categories-wrapper">
            <h3 style={{fontWeight: 'bold'}}> Our top categories</h3>
			<Row gutter={[24, 24]} className='md-content'>
                <Col md={4}><Button className='top-categories-button active'>Job Listing <br /> (365)</Button></Col>
                <Col md={4}><Button className='top-categories-button'>For Sale <br /> (365)</Button></Col>
                <Col md={4}><Button className='top-categories-button'>Housing <br /> (365)</Button></Col>
                <Col md={4}><Button className='top-categories-button'>Services <br /> (365)</Button></Col>
            </Row>
            <div className='sm-content top-categories'>
                <Button className='top-categories-button active'>Job Listing <br /> (365)</Button>
                <Button className='top-categories-button'>For Sale <br /> (365)</Button>
                <Button className='top-categories-button'>Housing <br /> (365)</Button>
                <Button className='top-categories-button'>Services <br /> (365)</Button>
            </div>
		</div>
	)
}