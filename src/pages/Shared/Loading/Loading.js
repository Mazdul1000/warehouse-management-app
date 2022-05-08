import React from 'react';

const Loading = () => {
    return (
        <div className='d-flex h-25 align-items-center gap-2 justify-content-center my-2'>
            <div><h1>Loading</h1></div>
            <div class="spinner-grow spinner-grow-sm" role="status">
                <span class="sr-only"></span>
            </div>
            <div class="spinner-grow spinner-grow-sm" role="status">
                <span class="sr-only"></span>
            </div>
            <div class="spinner-grow spinner-grow-sm" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    );
};

export default Loading;