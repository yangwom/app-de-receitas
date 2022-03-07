import React from 'react';

function SearchBar() {
  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
      />
      <input
        type="radio"
        value="Ingredient"
        data-testid="ingredient-search-radio"
      />
      <input
        type="radio"
        value="Name"
        data-testid="name-search-radio"
      />
      <input
        type="radio"
        value="First letter"
        data-testid="first-letter-search-radio"
      />
      <input
        type="button"
        value="Search"
        data-testid="exec-search-btn"
      />
    </div>
  );
}

export default SearchBar;
