import React from 'react';

const Error = ({ error }) => {
    return <div className='alert-msg'>
        <p>{error}</p>
    </div>
}

export default Error;