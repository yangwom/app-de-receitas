import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { MyContext } from '../../context/MyContext';
import cocktail from '../../images/cocktail.jpg';
import cocoa from '../../images/cocoa.jpg';
import ordinaryDrinks from '../../images/ordinaryDrinks.jpg';
import other from '../../images/other.jpg';
import shake from '../../images/shake.jpg';
import './styles.css';

const images = [ordinaryDrinks, cocktail, shake, other, cocoa];
const backgroundColor = ['#373B45', '#F2AA6B', '#734E40', '#F27B50', '#A69F7C'];

function Drinks() {
  const { drinks,
    drinkCategory,
    getFetchDrinkByCategory,
    getDrink,
    category,
    setCategory } = useContext(MyContext);
  const { pathname } = useLocation();

  const MAX_RECIPES = 12;
  const MAX_CATEGORY = 5;
  const slicedDrink = drinks.slice(0, MAX_RECIPES);
  const slicedCategory = drinkCategory.slice(0, MAX_CATEGORY);
  return (
    <div>
      <Header>
        Drinks
      </Header>
      <div className="container__drinks">
        <div className="container__drinks--categories">
          { drinkCategory.length !== 0 && slicedCategory
            .map(({ strCategory }, index) => (
              <div
                className="container__drinks--categories--button"
                key={ index }
              >
                <button
                  data-testid={ `${strCategory}-category-filter` }
                  key={ index }
                  type="button"
                  style={ { backgroundColor: backgroundColor[index] } }
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
                  <img
                    src={ images[index] }
                    alt="drinks"
                    className="drinks__category-image"
                  />
                  { strCategory }
                </button>
              </div>
            ))}
        </div>
        <div className="container__drinks--btnAll">
          <button
            type="button"
            data-testid="All-category-filter"
            className="btnAll"
            onClick={ () => {
              getDrink();
            } }
          >
            All

          </button>
        </div>
        <div className="container__drinks--recipes">
          { drinks.length !== 0 && slicedDrink
            .map((item, index) => (
              <div key={ index } className="container__drinks--card">
                <Cards
                  key={ item.idDrink }
                  index={ index }
                  src={ item.strDrinkThumb }
                  id={ item.idDrink }
                  name={ item.strDrink }
                  pathName={ pathname }
                />
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Drinks;
