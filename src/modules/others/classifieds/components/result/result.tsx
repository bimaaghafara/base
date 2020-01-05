import React from 'react';

// 3rd libs
import { Row, Col, Input, Button, Select, Icon, Pagination } from 'antd';
import Grid from 'antd/lib/card/Grid';
const { Option } = Select;

export const Result: React.FC<any> = (props) => {
	return (
		<div className="top-categories-wrapper">
            <Row>
                <Col md={6}>
                    <h3 style={{fontWeight: 'bold'}}>Results for {props.name}</h3>
                </Col>
                <Col md={12} />
                <Col md={6} style={{paddingLeft:30}}  className='md-content'>
                    <Button type='primary'>Post Listing</Button>
                </Col>
            </Row>
            <br />
            <Row gutter={[0, 12]} className='md-content'>
                <Col md={6}>
                    View as: 
                    <span className='bg-select-result'>
                        <Select
                            className='select-result'
                            defaultValue='list'
                        >
                            <Option className='option-result' value="list">List</Option>
                        </Select>
                        </span>
                </Col>
                <Col md={12}/>
                <Col md={6}>
                Sort by: 
                    <span className='bg-select-result'>
                        <Select
                            className='select-result'
                            defaultValue='rating'
                        >
                            <Option className='option-result' value="rating">Rating</Option>
                        </Select>
                    </span>
                </Col>
            </Row>
            <Row gutter={[0, 12]} className='sm-content'>
                <Col xs={12}>
                    View as: 
                    <span className='bg-select-result'>
                        <Select
                            className='select-result'
                            defaultValue='list'
                        >
                            <Option className='option-result' value="list">List</Option>
                        </Select>
                        </span>
                        <br />
                    Sort by: 
                    <span className='bg-select-result'>
                        <Select
                            className='select-result'
                            defaultValue='rating'
                        >
                            <Option className='option-result' value="rating">Rating</Option>
                        </Select>
                    </span>
                </Col>
                <Col xs={12} style={{paddingLeft:30}}>
                    <Button type='primary'>Post Listing</Button>
                </Col>
               
            </Row>
            <br />
            <br />
            {props.lists.map((v: any) => {
                return (
                <Row type="flex" justify="center" align="stretch" gutter={[0, 24]}>
                    <Col md={2} xs={6}>
                        <Icon type='calendar' /> {v.date}<br /> 
                        <div style={{paddingLeft: '50%'}}>
                            <Icon type='twitter'></Icon> 
                            <Icon type='share-alt'></Icon>
                        </div>
                    </Col>
                    <Col md={22} xs={18}>
                        <h1 className='result-title'>{v.title}</h1>
                        <Icon type="environment" />  {v.location}
                    </Col>
                </Row> 
            )
            })}
            <br />
            <Row>
                <Col md={14} />
                <Col md={8}><Pagination defaultCurrent={1} total={50} /></Col>
            </Row>
		</div>
	)
}