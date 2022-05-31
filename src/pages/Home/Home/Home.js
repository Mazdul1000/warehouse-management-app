import React from 'react';
import useInventoryItems from '../../../hooks/useInventoryItems';
import './Home.css';
import Inventory from '../Inventory/Inventory';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import './Home.css';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {
    const [inventoryItems, setInventoryItems] = useInventoryItems();
//   home
    const cutInventoryItems = inventoryItems.slice(0,6);

    return (
        <div>
            <Banner></Banner>

            <div className="position-relative mt-5">
            <h1 className="text-center featured-title">Featured Items</h1>

                <Row style={{padding:'100px 0 50px'}} xs={1} md={2} xl={3} className="g-4">
                    {
                        cutInventoryItems.map(item => <Inventory key={item._id} item={item}></Inventory>)
                    }

                </Row>

            </div>

            <section className='mt-5 position-relative'>

                <div><h1 className='brand-title text-center fw-bold'>Brands</h1></div>
           
                <div id="brand-section">
                    <div className="brand"><img src="https://i.ibb.co/kBsNtHk/honda-bike-vector.jpg" alt="" /></div>
                    <div className="brand"><img src="https://i.ibb.co/2MBbzT6/hero-motocorp-logo.png" alt="" /></div>
                    <div className="brand"><img src="https://i.ibb.co/WDBT61f/bajaj-logo-vector.png" alt="" /></div>
                    <div className="brand"><img src="https://i.ibb.co/svwws7r/yamaha-motor-vector-logo.png" alt="" /></div>
                    <div className="brand"><img src="https://i.ibb.co/8j57Gh5/tvs-vector-logo.png" alt="" /></div>
                    <div className="brand"><img src="https://i.ibb.co/tsZmytK/suzuki-eps-vector-logo.png" alt="" /></div>
                    <div className="brand"><img src="https://i.ibb.co/NLgHg59/lifan-vector-logo.png" alt="" /></div>
                    <div className="brand"><img src="https://i.ibb.co/nL4c33L/kawasaki-logo-01.png" alt="" /></div>
                </div>

            </section>

            <section className='my-5'>
                <Container>
                        <Row>
                    <Col md={6} className='px-5 d-flex justify-content-center align-items-center'>
                   <div className='text-center'><h1 style={{color:'#ED1B24'}}>Providing the <span style={{fontWeight:'bold'}}>Best Brands At The Best Price</span></h1></div>
                    </Col>

                    <Col md={6} className='px-5 mt-4'>
                     <div className='text-center'>
                         <h2 style={{fontWeight:'bold'}}>Motorcycle Warehouse</h2>
                          <p>We stock extensive range of Bikes. That includes Sports Bike, Naked Sports Bike, Cruiser Bike etc. You will get the best deal from us</p>
                         </div>
                    </Col>
                </Row>
                </Container>
            
            </section>
            
        </div>
    );
};

export default Home;