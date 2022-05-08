import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
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
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    let errorElement;
    if (error || updateError) {
        errorElement = <div> <p style={{color:'#ED1B24',fontWeight:'600'}}>Error: {error?.message}</p></div>
    }

    let loadingElement;

    if (loading || updating) {
        loadingElement = <Loading></Loading>;
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
           alert('passwords didn"t match')
            return;
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });



    }
    return (
        <div className='my-5'>
            <Form onSubmit={handleOnSubmit} className='w-50 mt-5 mx-auto login-form'>
                <div className="login-header py-2"><h2>Please Register</h2></div>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" ref={usernameRef} placeholder="Enter Username" autoComplete='off' required/>
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
                {errorElement}
                <Form.Group className="mb-3 d-flex justify-content-end">
                    <h5>Already have an account? <span onClick={() => navigate('/login')} style={{ cursor: 'pointer', color: '#ED1B24', fontWeight: '600' }}>Log In</span></h5>
                </Form.Group>



                <div className='d-flex justify-content-center'>
                <Button className='text-center px-5' variant="danger" type="submit">
                    Register
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
            <ToastContainer />
        </div>
    );
};

export default Register;