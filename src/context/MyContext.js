import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MyContext = createContext();

function MyProvider({ children }) {
  const [foodSearch, setFoodSearch] = useState([]);
  const [drinkSearch, setDrinkSearch] = useState([]);

  const contextValue = {
    foodSearch,
    drinkSearch,
    setFoodSearch,
    setDrinkSearch,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default MyProvider;
