import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ item }) => {
    const {_id, name, quantity, supplierName, price, img, description } = item;
    const navigate = useNavigate();

    const navigateToSingleItem = id =>{
      navigate(`/inventory/${id}`);
  }
    return (
<Col>
<Card>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
    <p>Price: {price}</p>   
    <p>Supplier Name: {supplierName}</p>
    <p>Quantity: {quantity}</p> 
    <p>id: {_id}</p>
    </Card.Text>
    <Card.Text>
     Description: {description}...<span className="fw-bold">See More</span>
    </Card.Text>
    <Button onClick={() => navigateToSingleItem(_id)} variant='primary'>Update</Button>
  </Card.Body>
</Card>
</Col>

    );
};

export default Inventory;