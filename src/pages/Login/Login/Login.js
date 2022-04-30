import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLgoin/SocialLogin';

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
      toast('please enter your email address');
    }
  }

  return (
    <div>
      <Form onSubmit={handleOnSubmit} className='w-50 mx-auto'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" ref={emailRef} placeholder="Enter email" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={passwordRef} placeholder="Password" />
        </Form.Group> 
        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
          <p onClick={resetPassword} style={{fontWeight:'bold',cursor:'pointer'}}>Forgot Password?</p>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <h4>Don't have an account? <span onClick={() => navigate('/register')} style={{cursor:'pointer'}}>Sign Up</span></h4>
      </Form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;