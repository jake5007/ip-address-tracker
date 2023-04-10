import React from 'react';
import SearchBox from './SearchBox';

const Background = ({ value, onChange, onSearchClick }) => {
    return (
        <div className='background'>
            <img src='/assets/pattern-bg-desktop.png' alt='background' />
            <div className='background__container'>
                <span className='title'>IP Address Tracker</span>
                <SearchBox 
                    value={value}
                    onChange={onChange} 
                    onSearchClick={onSearchClick}
                />
            </div>
        </div>
    )
}

export default Background;