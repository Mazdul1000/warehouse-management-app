import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogin.css';
import googleLogo from '../../../images/icons/google.svg'
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const [token] = useToken(user);

    let errorElement;
    if (error) {
        errorElement = <div> <p className='text-center' style={{ color: '#ED1B24', fontWeight: '600', }}>Error: {error?.message}</p></div>;
    }

    if (loading) {
        return <Loading></Loading>;
    }
    if (token) {
        navigate(from, { replace: true });
      }
      
    return (
        <div>
            <div className='social-login'>
                <Button onClick={() => signInWithGoogle()} className='google-login-btn btn-danger text-center d-flex justify-content-center align-items-center'><span><img src={googleLogo} alt="" /></span><span className='ms-2 fw-bold'>Continue With Google</span></Button>
                
            </div>
            {errorElement}
        </div>
    );
};

export default SocialLogin;