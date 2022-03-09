import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchFoods, fetchFoodsCategory } from '../../services/fechApi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Cards from '../../components/Cards';
import FoodsCategory from '../../components/FoodsCategory';
import Footer from '../../components/Footer';

function Foods({ history }) {
  const [food, setFood] = useState();

  const getFoods = async () => {
    const foods = await fetchFoods();
    setFood(foods.meals);
  };
  useEffect(() => {
    getFoods();
  }, []);

  const [foodCategory, setFoodCategory] = useState();

  const getFoodsCategory = async () => {
    const foods = await fetchFoodsCategory();
    setFoodCategory(foods.meals);
  };
  useEffect(() => {
    getFoodsCategory();
  }, []);
  console.log(foodCategory);
  return (
    <>
      <Header history={ history }>
        Foods
      </Header>
      <Cards foodList={ food } />
      <FoodsCategory foodsCategory={ foodCategory } />
      <Footer />
    </>
  );
}

Foods.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default Foods;
