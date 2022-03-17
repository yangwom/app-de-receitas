import React, { useContext } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ExploreCard from '../../components/ExploreCard';
import { MyContext } from '../../context/MyContext';

function ExploreIngredientsDrinks() {
  const { listIngredientDrinks } = useContext(MyContext);
  const MAX_NUMBER = 12;
  const slicedListIngredientsDrinks = listIngredientDrinks.slice(0, MAX_NUMBER);
  console.log(slicedListIngredientsDrinks);
  return (
    <div>
      <Header>
        Explore Ingredients
      </Header>
      <div className="container__exploreIngredients">
        {listIngredientDrinks && slicedListIngredientsDrinks
          .map((ingredient, index) => (<ExploreCard
            key={ index }
            src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
            index={ index }
            name={ ingredient.strIngredient1 }
          />))}
      </div>
      <div className="margin-bottom-footer" style={ { marginBottom: '80px' } } />
      <Footer />
    </div>
  );
}

export default ExploreIngredientsDrinks;
