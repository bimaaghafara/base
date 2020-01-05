import React, { useState } from 'react';

// 3rd libs
import { Row, Col, Input, Button, Select, Icon, Pagination } from 'antd';
export const ImageDetail: React.FC<any> = (props) => {
    const [selected, setSelected] = useState('')
    const [images, setImages] = useState([])
    if(props.images !== images) setImages(props.images)
    if(selected === '' && images.length > 0) setSelected(images[0])
    const active = {
        borderRadius: 1, borderStyle: 'solid', borderColor: 'white'
    }
	return (
		<div>
            <img style={{height: 250, width: '100%', objectFit: "cover"}} src={selected}/>
            <div style={{height: 70, width: '100%', backgroundColor: '#B0B0B0', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                {images.map(v => {
                    let style= {
                        height: 50, 
                        width: 50,
                        cursor: 'pointer', 
                    }
                    if(selected === v) {
                        style = {
                            ...style,
                            ...active
                        }
                    }
                    return (
                        <div style={{paddingTop: 10,paddingRight: 10, borderColor: 'white'}} onClick={() => setSelected(v)}>
                            <img style={style} src={v} alt={v} />
                        </div>)
                })}
            </div>
        </div>
	)
}