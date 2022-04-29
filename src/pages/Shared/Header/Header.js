import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    const navigate = useNavigate();

    const navigateToHome = () => navigate('/');
    const navigateToLogin = () => navigate('/login');
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand onClick={navigateToHome} style={{ cursor: 'pointer' }} >Bike House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={CustomLink} to='/'>Home</Nav.Link>
                            <Nav.Link as={CustomLink} to='/inventory'>Inventory</Nav.Link>
                            <Nav.Link as={CustomLink} to='/myItems'>My Items</Nav.Link>
                            <Nav.Link as={CustomLink} to='/blogs'>Blogs</Nav.Link>
                        </Nav>
                        <Nav>

                            <Nav.Link as={Button} variant='success' style={{color:'#fff',fontWeight:'bold',padding:'5px 20px'}} onClick={navigateToLogin}  >Login</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;