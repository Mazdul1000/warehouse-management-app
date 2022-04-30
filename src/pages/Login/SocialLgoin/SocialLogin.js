import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

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
        <div>
            <Button onClick={() => signInWithGoogle()} className='google-login-btn btn-success text-center d-flex justify-content-center align-items-center'><span></span><span>Continue With Google</span></Button>
        </div>
    );
};

export default SocialLogin;