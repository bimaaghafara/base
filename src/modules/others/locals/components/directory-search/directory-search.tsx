import React from 'react';

// 3rd libs
import { Row, Col, Input } from 'antd';

export const DirectorySearch: React.FC<any> = () => {
	return (
		<div className="directory-wrapper">
			<Row gutter={[24, 24]}>
				<Col xl={24}>
					<div className="search-wrapper">
						<Input.Search
							placeholder="What? (Business)"
							onSearch={value => '50%'}
							style={{ width: '50%' }}
						/>
						<Input.Search
							placeholder="Where? (Places)"
							onSearch={value => ''}
							style={{ width: '50%' }}
						/>
					</div>
				</Col>
			</Row>
		</div>
	)
}