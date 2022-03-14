export const setFavoriteRecipes = (obj) => {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favorites === null) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([obj]));
  } else {
    const newFavorites = [...favorites, obj];
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  }
};

export const removeFavoriteRecipes = (id) => {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const newFavorites = favorites.filter((favorite) => favorite.id !== id);
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
};
