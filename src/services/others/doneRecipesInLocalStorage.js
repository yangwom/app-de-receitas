const KEY_DONE_RECIPES = 'doneRecipes';

const initialStructureForRecipesInProgress = [];

const save = (content) => {
  window.localStorage.setItem(KEY_DONE_RECIPES, JSON.stringify(content));
};

const read = () => {
  let content = window.localStorage.getItem(KEY_DONE_RECIPES);
  if (!content) {
    save(initialStructureForRecipesInProgress);
    content = initialStructureForRecipesInProgress;
    return content;
  }
  return JSON.parse(content);
};

const doneRecipes = {
  add(obj) {
    const items = read();
    items.push(obj);
    save(items);
    return items;
  },
  get() {
    const items = read();
    return items;
  },
};

export default doneRecipes;
