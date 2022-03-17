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
    <div>
      <div className="container--buttons">
        <button
          onClick={ () => history.push(`/explore/${location}/ingredients`) }
          type="button"
          data-testid="explore-by-ingredient"
          className="btn-explorer"
        >
          By Ingredient
        </button>
        {location === 'foods' && (
          <button
            onClick={ () => history.push(`/explore/${location}/nationalities`) }
            type="button"
            data-testid="explore-by-nationality"
            className="btn-explorer"
          >
            By Nationality
          </button>
        )}
        <button
          onClick={ () => history.push(`/${location}/${getSuprise()}`) }
          // onClick={ () => getSuprise() }
          type="button"
          data-testid="explore-surprise"
          className="btn-explorer"
        >
          Surprise me!
        </button>
      </div>
    </div>
  );
}
