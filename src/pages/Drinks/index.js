import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';
import { fetchDrinksCards } from '../../services/fechApi';

function Drinks() {
  const [drinks, setDrinks] = useState();
  const getDrink = async () => {
    const data = await fetchDrinksCards();
    setDrinks(data.drinks);
  };

  useEffect(() => {
    getDrink();
  }, []);
  console.log(drinks);
  const verify = drinks !== undefined;
  console.log(verify);
  const number = 12;
  return (
    <div>
      <Header>
        Drinks
      </Header>
      { verify === true ? drinks.filter((item) => item.indexOf(item) < number)
        .map((drink, index) => (
          <Cards
            key={ drink.idDrink }
            index={ index }
            src={ drink.strDrinkThumb }
            id={ drink.idDrink }
            name={ drink.strDrink }
          />
        )) : 'carregando' }

      <Footer />
    </div>
  );
}

export default Drinks;
