import React, { useContext } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';
import { MyContext } from '../../context/MyContext';

function Drinks() {
  const { drinks,
    drinkCategory,
    getFetchDrinkByCategory,
    getDrink,
    category,
    setCategory } = useContext(MyContext);
  const MAX_RECIPES = 12;
  const MAX_CATEGORY = 5;
  const slicedDrink = drinks.slice(0, MAX_RECIPES);
  const slicedCategory = drinkCategory.slice(0, MAX_CATEGORY);
  return (
    <div>
      <Header>
        Drinks
      </Header>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => {
          getDrink();
        } }
      >
        All

      </button>
      { drinkCategory.length !== 0 && slicedCategory
        .map(({ strCategory }, index) => (
          <button
            data-testid={ `${strCategory}-category-filter` }
            key={ index }
            type="button"
            onClick={ () => {
              if (category === strCategory) {
                getDrink();
                setCategory();
              } else {
                getFetchDrinkByCategory(strCategory);
                setCategory(strCategory);
              }
            } }
          >
            { strCategory }
          </button>
        ))}
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

      <Footer />
    </div>
  );
}

export default Drinks;
