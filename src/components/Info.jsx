import React from 'react';

const Info = ({ label, value }) => {
    return (
        <>
            <span className='info-label'>{label}</span>
            <span className='info-value'>{label === 'TIMEZONE' && value && 'UTC'} {value}</span>
        </>
    )
}

export default Info;