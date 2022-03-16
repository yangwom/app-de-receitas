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
        ingredients
      </Header>
      {listIngredientDrinks && slicedListIngredientsDrinks
        .map((ingredient, index) => (<ExploreCard
          key={ index }
          src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
          index={ index }
          name={ ingredient.strIngredient1 }
        />))}
      <Footer />
    </div>
  );
}

export default ExploreIngredientsDrinks;
