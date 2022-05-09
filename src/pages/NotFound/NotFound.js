import React from 'react';
import './NotFound.css';
import notFound from '../../images/NotFound.jpg';

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center' style={{height:'80vh',position:'relative'}}>
            <img style={{width:'80%'}} src={notFound} alt="" />
            <h2 className='not-found'>Page Not Found</h2>
        </div>
    );
};

export default NotFound;