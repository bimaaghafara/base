import React from 'react';

// 3rd libs
import { Breadcrumb, Icon, Row, Col } from 'antd';

export const Under: React.FC<any> = () => {
	return (
		<div className="title-wrapper">
			<Row>
                <Col xs={10} md={6}><b>Posted Under: </b></Col>
                <Col xs={14} md={18}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="">
                            <span>ALL</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="">
                            <span>Job Listing</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="">
                            <span>Job Post</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
		</div>
	)
}