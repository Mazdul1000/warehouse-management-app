import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className='banner'>
            <div className='banner-title'><h1 className='text-center fw-bold'>The Bike House LTD</h1></div>
            
            <Row className='banner-info'>
                <Col md={6}>
                <h1 className='d-flex flex-column flex justify-content-center align-items-center' ><span>Business</span><span>Made</span><span>Easy</span></h1>
                </Col>
                <Col className="d-flex justify-content-center align-items-center" md={6}>
                    <div><Button onClick={()=> navigate('/register')} className='fs-3 fw-bold' variant='danger'> Join Us</Button></div>
                </Col>
            </Row>
        </div>
    );
};

export default Banner;