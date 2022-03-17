const NUMBER_INGREDIENTS = 20;

function getmeasureAndIngredients(item) {
  const measureAndIngredients = [];

  for (let i = 1; i <= NUMBER_INGREDIENTS; i += 1) {
    if (item[`strIngredient${i}`]) {
      measureAndIngredients.push(`${item[`strIngredient${i}`]}: 
          ${item[`strMeasure${i}`]}`);
    }
  }
  return measureAndIngredients;
}

export default getmeasureAndIngredients;
