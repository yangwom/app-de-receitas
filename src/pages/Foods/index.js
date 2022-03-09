import React, { useState, useEffect } from 'react';
import { fetchFoods, fetchFoodsCategory } from '../../services/fechApi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';
import FoodsCategory from '../../components/FoodsCategory';

function Foods() {
  const [foods, setFoods] = useState();

  const getFoods = async () => {
    const data = await fetchFoods();
    setFoods(data.meals);
  };
  useEffect(() => {
    getFoods();
  }, []);

  const [foodCategory, setFoodCategory] = useState();

  const getFoodsCategory = async () => {
    const data = await fetchFoodsCategory();
    setFoodCategory(data.meals);
  };
  useEffect(() => {
    getFoodsCategory();
  }, []);
  console.log(foods);
  const verify = foods !== undefined;
  console.log(verify);
  return (
    <>
      <Header>
        Foods
      </Header>
      { verify === true ? foods.filter((food) => drink.indexOf(food) < number)
        .map((food, index) => (
          <Cards
            key={ food.idMeal }
            index={ index }
            src={ food.strMealThumb }
            id={ food.idMeal }
            name={ food.strMeal }
          />
        )) : 'carregando'}

      <FoodsCategory foodsCategory={ foodCategory } />
      <Footer />
    </>
  );
}

export default Foods;
