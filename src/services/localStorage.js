const CHAVE_RECIPES_IN_PROGRESS = 'inProgressRecipes';

const saveRecipesInProgress = () => {
  localStorage.setItem(CHAVE_RECIPES_IN_PROGRESS, JSON
    .stringify({ cocktails: { }, meals: { } }));
};

export default saveRecipesInProgress;
