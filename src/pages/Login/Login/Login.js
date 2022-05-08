import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLgoin/SocialLogin';
import './Login.css'

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  let errorElement;
  if (error) {
      errorElement = <div> <p style={{color:'#ED1B24',fontWeight:'600'}}>Error: {error?.message}</p></div>
  }

let loadingElement;
  if (loading) {
    loadingElement = <Loading></Loading>;
}

  const handleOnSubmit = e => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else {
      toast('Please enter your email address');
    }
  }

  return (

    <div className='login-section'>

      <Form onSubmit={handleOnSubmit} className='mx-auto mt-5 login-form'>
      <div className="login-header py-2"><h2>Please Login</h2></div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" ref={emailRef} placeholder="Enter email" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={passwordRef} placeholder="Password" />
        </Form.Group> 
        {errorElement}
        <Form.Group className="mb-3 d-flex justify-content-between">
          <div className='d-flex w-100 justify-content-between'>
            <p onClick={resetPassword} style={{fontWeight:'bold',cursor:'pointer'}}>Forgot Password?</p>
            <h6>Don't have an account? <span onClick={() => navigate('/register')} style={{cursor:'pointer',color:'#ED1B24',fontWeight:'600'}}>Sign Up</span></h6>
          </div>
          
        </Form.Group>
        <div className='d-flex justify-content-center'><Button className='text-center px-5' variant="danger" type="submit">
          Login
        </Button>
        </div>   
        {loadingElement}
      </Form>
      <div className='d-flex justify-content-center align-items-center gap-1'>
       <div className='divider'></div>
      <div><h3 className='fw-bold'>OR</h3></div>
      <div className='divider'></div> 
      </div>
      
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;