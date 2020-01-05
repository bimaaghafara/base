import React from 'react';

// 3rd libs
import { Row, Col, Input, Button } from 'antd';

export const DirectorySearch: React.FC<any> = () => {
	return (
		<div className="directory-wrapper">
			<Row gutter={[24, 24]}>
                <Col md={6} style={{alignItems: 'center', alignContent: 'center', }}>
                    <b>Search Classifieds</b>
                </Col>
				<Col md={6}>
                    <Input.Search
                        placeholder="What? (Shools,Mosques,etc)"
                        onSearch={value => '50%'}
                    />
				</Col>
                <Col md={6}>
                    <Input.Search
                        placeholder="Where? (City, Zip)"
                        onSearch={value => ''}
                    />
                </Col>
                <Col md={6}>
                    <Button type="primary" icon="search">
                        Search
                    </Button>
                </Col>
			</Row>
		</div>
	)
}