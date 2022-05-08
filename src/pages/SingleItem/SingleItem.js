import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useSingleItem from '../../hooks/useSingleItem';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';

const SingleItem = () => {
    const { itemId } = useParams();

    const [singleItem, setSingleItem] = useSingleItem(itemId);
    const { _id, name, price, type, brand, supplierName, description, img, brakingSystem, maximumTorque, maximumPower, quantity, Displacement, engineType } = singleItem;



    const handleDeliveredBtn = id => {
        
    }
    return (
        <div>
            <Container>

        <div className='d-flex justify-content-center'> <img className='w-50 mx-auto' src={img} alt="" /> </div>   
<h2 className='text-center fw-bold'> {name}</h2>
<Row className='mt-4'>
    <Col md={6} >
        
        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{width:'30px'}}></ArrowCircleRightIcon></span> Price: {price}</h3>
        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{width:'30px'}}></ArrowCircleRightIcon></span> Type: {type}</h3>
        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{width:'30px'}}></ArrowCircleRightIcon></span> Brand: {brand}</h3>
        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{width:'30px'}}></ArrowCircleRightIcon></span> Supplier: {supplierName}</h3>
        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{width:'30px'}}></ArrowCircleRightIcon></span> Displacement: {Displacement ? Displacement : 'N/A'}</h3>
    </Col>
    <Col md={6} >
        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{width:'30px'}}></ArrowCircleRightIcon></span> Engine Type: {engineType ? engineType : 'N/A'}</h3>
        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{width:'30px'}}></ArrowCircleRightIcon></span> Breaking System: {brakingSystem}</h3>
        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{width:'30px'}}></ArrowCircleRightIcon></span> Maximum Power: {maximumPower ? maximumPower : 'N/A'}</h3>
        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{width:'30px'}}></ArrowCircleRightIcon></span> Maximum Torque: {maximumTorque ? maximumTorque : 'N/A'}</h3>
        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{width:'30px'}}></ArrowCircleRightIcon></span> Quantity: {quantity}</h3>
    </Col>
</Row>

<div className="description mb-4"><h3 className='mt-4'> <span className='fw-bold'>Description:</span>  {description}</h3></div>


<Button variant='danger' onClick={() => handleDeliveredBtn(_id)}>Delivered</Button>
            </Container>

          
        </div>
    );
};

export default SingleItem;