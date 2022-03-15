const KEY_DONE_RECIPES = 'doneRecipes';

const initialStructureForRecipesInProgress = {
  meals: [],
  cocktails: [],
};

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
  add(type, obj) {
    const items = read();
    items[type].push(obj);
    save(items);
    return items[type];
  },
  get(type) {
    const items = read();
    return items[type];
  },
};

export default doneRecipes;
