import React, { useContext } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ExploreCard from '../../components/ExploreCard';
import { MyContext } from '../../context/MyContext';

function ExploreIngredientsFoods() {
  const { listIngredientFoods } = useContext(MyContext);
  const MAX_NUMBER = 12;
  const slicedListIngredientsFoods = listIngredientFoods.slice(0, MAX_NUMBER);
  return (
    <div>
      <Header>
        Explore Ingredients
      </Header>
      <div className="container__exploreIngredients">
        {listIngredientFoods && slicedListIngredientsFoods
          .map((ingredient, index) => (<ExploreCard
            key={ index }
            src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
            index={ index }
            name={ ingredient.strIngredient }
            type="foods"
          />))}
      </div>
      <div className="margin-bottom-footer" style={ { marginBottom: '80px' } } />
      <Footer />
    </div>
  );
}

export default ExploreIngredientsFoods;
