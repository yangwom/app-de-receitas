export const fetchIngredientDrink = async (ingredient) => {
  const endpointIngredient = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(endpointIngredient);
  try {
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

export const fetchNameDrink = async (name) => {
  const endpointName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(endpointName);
  try {
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

export const fetchFirstLetterDrink = async (firstLetter) => {
  const endpointIFirstLetter = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const response = await fetch(endpointIFirstLetter);
  try {
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

export const fetchDrinkId = async (id) => {
  const endpointFirstLetter = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(endpointFirstLetter);
  const data = await response.json();
  return data;
};
