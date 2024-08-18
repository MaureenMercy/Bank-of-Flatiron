import React from 'react';
import '../styles/SearchBar.css'; // Adjust the path to the correct location of the CSS file

function SearchBar({ searchTerm, onSearch }) {
    return (
        <div className="search-bar-container">
            <input 
                type="text"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;