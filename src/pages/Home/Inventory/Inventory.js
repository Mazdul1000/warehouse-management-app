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
    <Card.Title className='text-center fw-bold'><span onClick={() => navigateToSingleItem(_id)} style={{cursor:'pointer'}}>{name}</span></Card.Title>
    <Card.Text className='fw-bold'>
    <p>Price: {price}</p>   
    <p>Supplier Name: {supplierName}</p>
    <p>Quantity: {quantity}</p> 
    </Card.Text>
    <Card.Text>
     <span className='fw-bold'>Description:</span> {description.slice(0,100)}...<span className="fw-bold">See More</span>
    </Card.Text>
    <div className='d-flex justify-content-center'>
      <Button  onClick={() => navigateToSingleItem(_id)} variant='danger'>Update</Button>
    </div>
    
  </Card.Body>
</Card>
</Col>

    );
};

export default Inventory;