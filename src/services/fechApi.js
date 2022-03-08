export const fetchFoods = async () => {
  const urlFoods = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(urlFoods);
  const data = await response.json();
  return data;
};

export const fetchFoodsCategory = async () => {
  const urlFoods = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(urlFoods);
  const data = await response.json();
  return data;
};
