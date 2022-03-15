import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { MyContext } from '../../context/MyContext';

export default function ExploreButtons() {
  const history = useHistory();
  const { surpriseFood, surpriseDrink } = useContext(MyContext);
  const pathName = history.location.pathname.split('/');
  const location = pathName[pathName.length - 1];
  const getSuprise = () => {
    const getSurpriseFood = surpriseFood['0'].idMeal;
    const getSurpriseDrink = surpriseDrink['0'].idDrink;
    if (location === 'foods') {
      return getSurpriseFood;
    }
    return getSurpriseDrink;
  };
  return (
    <>
      <button
        onClick={ () => history.push(`/explore/${location}/ingredients`) }
        type="button"
        data-testid="explore-by-ingredient"
      >
        By Ingredient
      </button>
      {location === 'foods' && (
        <button
          onClick={ () => history.push(`/explore/${location}/nationalities`) }
          type="button"
          data-testid="explore-by-nationality"
        >
          By Nationality
        </button>
      )}
      <button
        onClick={ () => history.push(`/${location}/${getSuprise()}`) }
        // onClick={ () => getSuprise() }
        type="button"
        data-testid="explore-surprise"
      >
        Surprise me!
      </button>
    </>
  );
}
