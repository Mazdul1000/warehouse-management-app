import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogin.css';
import googleLogo from '../../../images/icons/google.svg'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (loading) {
        return <p>Loading...</p>;
      }
    if(user){
        navigate('/home');
    }
    return (
        <div className='social-login'>
            <Button onClick={() => signInWithGoogle()} className='google-login-btn btn-danger text-center d-flex justify-content-center align-items-center'><span><img src={googleLogo} alt="" /></span><span className='ms-2 fw-bold'>Continue With Google</span></Button>
        </div>
    );
};

export default SocialLogin;