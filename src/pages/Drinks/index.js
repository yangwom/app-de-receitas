import React, { useContext } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';
import { MyContext } from '../../context/MyContext';

function Drinks() {
  const { drinks, drinkCategory, getFetchDrinkByCategory } = useContext(MyContext);
  const MAX_RECIPES = 12;
  const MAX_CATEGORY = 5;
  const slicedDrink = drinks.slice(0, MAX_RECIPES);
  const slicedCategory = drinkCategory.slice(0, MAX_CATEGORY);
  return (
    <div>
      <Header>
        Drinks
      </Header>
      { drinks.length !== 0 && slicedDrink
        .map((item, index) => (
          <Cards
            key={ item.idDrink }
            index={ index }
            src={ item.strDrinkThumb }
            id={ item.idDrink }
            name={ item.strDrink }
          />
        ))}

      { drinkCategory.length !== 0 && slicedCategory
        .map((category, index) => (
          <button
            data-testid={ `${category.strCategory}-category-filter` }
            key={ index }
            type="button"
            onClick={ () => getFetchDrinkByCategory(category.strCategory) }
          >
            { category.strCategory }
          </button>
        ))}
      <Footer />
    </div>
  );
}

export default Drinks;
