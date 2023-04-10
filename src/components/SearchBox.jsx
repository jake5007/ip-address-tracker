import React from 'react';

const SearchBox = ({ value, onChange, onSearchClick }) => {
    return (
        <div className='search-box'>
            <input 
                type='text'
                className='search-input'
                placeholder='Search for any IP address or domain'
                value={value}
                onChange={onChange} 
            />
            <button 
                className='search-btn'
                onClick={onSearchClick} 
            />
        </div>
    ) 
}

export default SearchBox;