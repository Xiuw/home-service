import React from 'react';
import "./SearchBox.css";

const SearchBox = ({handleSearch,search,category}) =>{
	return(
		<div className='search'>
			<input
			type="text"
			className="inputbox"
			name="search"
			value={search}
			placeholder='Search'
			onChange={handleSearch}
			/>
		</div>
	)
}

export default SearchBox;