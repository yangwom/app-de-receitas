import React, { useContext } from 'react';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { MyContext } from '../../context/MyContext';

function Foods() {
  const [sliced, setSliced] = useState(true);
  const [category, setCategory] = useState();
  const [slicedFoods, setSlicedFoods] = useState();
  const { foods, foodCategory,
    getSearchByCategory } = useContext(MyContext);

  const MAX_RECIPES = 12;
  const MAX_CATEGORY = 5;
  const slicedCategory = foodCategory.slice(0, MAX_CATEGORY);

  useEffect(() => {
    setSlicedFoods(sliced ? foods.slice(0, MAX_RECIPES) : foods);
  }, [foods, setSlicedFoods, sliced]);

  return (
    <div>
      <Header>
        Foods
      </Header>
      <div className="container__foods">
        { foodCategory.length !== 0 && slicedCategory
          .map(({ strCategory }, index) => (
            <button
              data-testid={ `${strCategory}-category-filter` }
              key={ index }
              type="button"
              onClick={ () => {
                if (category === strCategory) {
                  setSliced(!sliced);
                } else {
                  getSearchByCategory(cstrCategory);
                  setCategory(strCategory);
                  setSliced(true);
                }
              } }
            >
              { strCategory }
            </button>
          ))}
        <ul style={ { display: 'grid', gridTemplateColumns: 'repeat(3, 100px' } }>
          { foods.length !== 0 && slicedFoods
            .map((food, index) => (
              <Cards
                key={ food.idMeal }
                index={ index }
                src={ food.strMealThumb }
                id={ food.idMeal }
                name={ food.strMeal }
              />
            ))}

        </ul>
        <Footer />
      </div>
    </div>
  );
}

export default Foods;
