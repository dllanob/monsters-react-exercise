import React from 'react';

import './search.styles.css';

export const SearchBoxComponent = ({ placeholder, handleChange }) => (
    <div>
        <input 
          type='search'
          className='search'
          placeholder={ placeholder } 
          onChange={ handleChange } />
    </div>
);