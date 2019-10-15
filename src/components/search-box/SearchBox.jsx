import React from 'react';
import './search-box.styles.css';

const SearchBox = (props) => {
	return (
		<input
			className='search'
      type='text'
      placeholder={props.placeholder}
      onChange={props.handleSearch}
    />
	);
};

export default SearchBox;