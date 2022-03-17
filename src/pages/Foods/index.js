import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { MyContext } from '../../context/MyContext';
import beef from '../../images/beef.jpg';
import breakfast from '../../images/breakfast.jpg';
import chicken from '../../images/chicken.jpg';
import dessert from '../../images/dessert.jpeg';
import goat from '../../images/goat.jpeg';
import './styles.css';

const images = [beef, breakfast, chicken, dessert, goat];
const backgroundColor = ['#373B45', '#F2AA6B', '#734E40', '#F27B50', '#A69F7C'];

function Foods() {
  const {
    foods,
    foodCategory,
    getForFoodsByCategory,
    getFoods,
    category,
    setCategory } = useContext(MyContext);
  const { pathname } = useLocation();

  const MAX_RECIPES = 12;
  const MAX_CATEGORY = 5;
  const slicedCategory = foodCategory.slice(0, MAX_CATEGORY);
  const slicedFoods = foods.slice(0, MAX_RECIPES);

  return (
    <div>
      <Header>
        Foods
      </Header>
      <div className="container__foods">
        <div className="container__foods--categories">
          { foodCategory.length !== 0 && slicedCategory
            .map(({ strCategory }, index) => (
              <div
                className="container__foods--categories--button"
                key={ index }
              >
                <button
                  data-testid={ `${strCategory}-category-filter` }
                  type="button"
                  style={ { backgroundColor: backgroundColor[index] } }
                  onClick={ () => {
                    if (category === strCategory) {
                      getFoods();
                      setCategory();
                    } else {
                      getForFoodsByCategory(strCategory);
                      setCategory(strCategory);
                    }
                  } }
                >
                  <img
                    src={ images[index] }
                    alt="foods"
                    className="foods__category-image"
                  />
                  {strCategory }
                </button>
              </div>
            ))}
        </div>
        <div className="container__foods--btnAll">
          <button
            type="button"
            data-testid="All-category-filter"
            className="btnAll"
            onClick={ () => {
              getFoods();
            } }
          >
            All

          </button>
        </div>
        <div className="container__foods--recipes">
          { foods.length !== 0 && slicedFoods.map((food, index) => (
            <div key={ index } className="container__foods--card">
              <Cards
                key={ food.idMeal }
                index={ index }
                src={ food.strMealThumb }
                id={ food.idMeal }
                name={ food.strMeal }
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

export default Foods;
