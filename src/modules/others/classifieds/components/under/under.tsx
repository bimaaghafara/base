import React from 'react';

// 3rd libs
import { Breadcrumb, Icon } from 'antd';

export const Under: React.FC<any> = () => {
	return (
		<div className="title-wrapper">
			<b>Posted Under : </b>
                <Breadcrumb className="breadcrumb">
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
		</div>
	)
}