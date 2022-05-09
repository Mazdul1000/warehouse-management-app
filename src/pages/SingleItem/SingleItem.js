import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useSingleItem from '../../hooks/useSingleItem';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';

const SingleItem = () => {
    const { itemId } = useParams();

    const [singleItem, setSingleItem] = useSingleItem(itemId);
    const { _id, name, price, type, brand, supplierName, description, img, brakingSystem, maximumTorque, maximumPower,quantity, Displacement, engineType } = singleItem;




    const handleDeliveredBtn = id => {
        
        const { quantity, ...rest } = singleItem;
        if(quantity < 1){
            return;
        }

        const newQuantity = quantity - 1;
        const updatedItem = { ...rest, quantity: newQuantity }
        setSingleItem(updatedItem);
        const url = `https://bike-house-34.herokuapp.com/bikes/${id}`;
         fetch(url, {
           method: 'PUT',
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(updatedItem)  
         })
         .then(res => res.json())
         .then(data => {
             console.log('success',data);
             toast('Item delivered');
         })
        
    }
    return (
        <div>
            <Container>

                <div className='d-flex justify-content-center'> <img className='w-50 mx-auto' src={img} alt="" /> </div>
                <h2 className='text-center fw-bold'> {name}</h2>
                <Row className='mt-4'>
                    <Col md={6} >

                        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{ width: '30px' }}></ArrowCircleRightIcon></span> <span className='fw-bold'>Price:</span> {price}</h3>
                        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{ width: '30px' }}></ArrowCircleRightIcon></span> <span className='fw-bold'>Type:</span> {type}</h3>
                        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{ width: '30px' }}></ArrowCircleRightIcon></span> <span className='fw-bold'>Brand:</span> {brand}</h3>
                        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{ width: '30px' }}></ArrowCircleRightIcon></span> <span className='fw-bold'>Supplier:</span> {supplierName}</h3>
                        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{ width: '30px' }}></ArrowCircleRightIcon></span> <span className='fw-bold'>Quantity:</span> {quantity}</h3>
                        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{ width: '30px' }}></ArrowCircleRightIcon></span> <span className='fw-bold'>Displacement:</span> {Displacement ? Displacement : 'N/A'}</h3>
                    </Col>
                    <Col md={6} >
                        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{ width: '30px' }}></ArrowCircleRightIcon></span> <span className='fw-bold'>Engine Type:</span> {engineType ? engineType : 'N/A'}</h3>
                        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{ width: '30px' }}></ArrowCircleRightIcon></span> <span className='fw-bold'>Breaking System:</span> {brakingSystem}</h3>
                        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{ width: '30px' }}></ArrowCircleRightIcon></span> <span className='fw-bold'>Maximum Power:</span> {maximumPower ? maximumPower : 'N/A'}</h3>
                        <h3 className='mt-4'><span><ArrowCircleRightIcon style={{ width: '30px' }}></ArrowCircleRightIcon></span> <span className='fw-bold'>Maximum Torque:</span> {maximumTorque ? maximumTorque : 'N/A'}</h3>
                    </Col>
                </Row>

                <div className="description mb-4"><h3 className='mt-4'> <span className='fw-bold'>Description:</span>  {description}</h3></div>


                <Button variant='danger' onClick={() => handleDeliveredBtn(_id)}>Delivered</Button>
            </Container>


        </div>
    );
};

export default SingleItem;