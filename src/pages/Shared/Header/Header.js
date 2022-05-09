import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const navigateToHome = () => navigate('/');
    const navigateToLogin = () => navigate('/login');

    return (
        <div>
            <Navbar id='nav-bar' collapseOnSelect expand="lg" bg="light">
                <Container>
                    <Navbar.Brand className='fs-2' onClick={navigateToHome} style={{ cursor: 'pointer' }} >Bike House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={CustomLink} to='/'>Home</Nav.Link>
                            <Nav.Link as={CustomLink} to='/blogs'>Blogs</Nav.Link>
                        </Nav>
                            
                            {user ?
                            <Nav className='ms-auto'>
                            <Nav.Link as={CustomLink} to='/manageInventory'>Manage Inventory</Nav.Link>
                            <Nav.Link as={CustomLink} to='/myItems'>My Items</Nav.Link>
                            <Nav.Link as={CustomLink} to='/addItems'>Add Items</Nav.Link> 
                            </Nav>                              
                            :''
                            }
                            
                            
                        
                        <Nav>
                          {
                             user?
                                <Nav.Link className='login-btn' as={Button} variant='danger' style={{color:'#fff',fontWeight:'bold',padding:'5px 20px'}} onClick={()=>signOut(auth)}  >Log Out</Nav.Link>
                              :
                         
                            <Nav.Link className='login-btn' variant='danger' as={Button} style={{color:'#fff',fontWeight:'bold',padding:'5px 20px'}} onClick={navigateToLogin}  >Login</Nav.Link>
                             }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;