export const fetchIngredientFood = async (ingredient) => {
  const endpointIgredient = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(endpointIgredient);
  const data = await response.json();
  return data;
};

export const fetchNameFood = async (name) => {
  const endpointName = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(endpointName);
  const data = await response.json();
  return data;
};

export const fetchFirstLetterFood = async (firstLetter) => {
  const endpointFirstLetter = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const response = await fetch(endpointFirstLetter);
  const data = await response.json();
  return data;
};
