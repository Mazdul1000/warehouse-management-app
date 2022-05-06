import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useSingleItem from '../../hooks/useSingleItem';

const SingleItem = () => {
    const { itemId } = useParams();

    const [singleItem, setSingleItem] = useSingleItem(itemId);
    const {_id,name, price, type, brand, supplierName, description, img, brakingSystem, maximumTorque, maximumPower,quantity, Displacement, engineType } = singleItem;

    const [exactQuantity, setExactQuantitiy] = useState('');
    
   
    const handleDeliveredBtn = id => {
    setExactQuantitiy(quantity)
    }
    return (
        <div>
            <h1>Your Item id: {itemId}</h1>
            <img src={img} width="500" alt="" />
            <h2>Item name: {name}</h2>
            <h3>Price: {price}</h3>
            <h3>Type: {type}</h3>
            <h3>Brand: {brand}</h3>
            <h3>Supplier: {supplierName}</h3>
            <h3>Displacement: {Displacement}</h3>
            <h3>Engine Type: {engineType}</h3>
            <h3>Breaking System: {brakingSystem}</h3>
            <h3>Maximum Power: {maximumPower}</h3>
            <h3>Maximum Torque: {maximumTorque}</h3>
            <h3>Quantity: {exactQuantity}</h3>
            <h3>Description: {description}</h3>

            <Button onClick={() => handleDeliveredBtn(_id)}>Delivered</Button>
        </div>
    );
};

export default SingleItem;