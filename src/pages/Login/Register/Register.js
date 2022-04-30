import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLgoin/SocialLogin';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const usernameRef = useRef('');
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (error || updateError) {
        return<div> <p>Error: {error?.message}</p> </div>        
      }
      if (loading || updating) {
        return <p>Loading...</p>;
      }

      if (user) {
        navigate('/home');
      }

    const handleOnSubmit = async e => {

        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        const displayName = usernameRef.current.value;
        if (password !== confirmPassword) {
            return alert('password doesnt match');
        }

        await createUserWithEmailAndPassword(email,password);
        await updateProfile({displayName});
       
        

    }
    return (
        <div>
            <Form onSubmit={handleOnSubmit} className='w-50 mt-5 mx-auto'>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" ref={usernameRef} placeholder="Enter Username" autoComplete='off' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} placeholder="Enter email"
                        required autoComplete='off' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" ref={confirmPasswordRef} placeholder="Confirm Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                

                <Button variant="primary" type="submit">
                 Submit
                </Button> 
                <h4>Already have an account? <span onClick={() => navigate('/login')} style={{cursor:'pointer'}}>Log In</span></h4>
            </Form>
            <SocialLogin></SocialLogin>
            <ToastContainer/> 
        </div>
    );
};

export default Register;