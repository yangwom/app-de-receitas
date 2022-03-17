const KEY_RECIPES_IN_PROGRESS = 'inProgressRecipes';
const initialStructureForRecipesInProgress = {
  meals: {},
  cocktails: {},
};

const save = (content) => {
  window.localStorage.setItem(KEY_RECIPES_IN_PROGRESS, JSON.stringify(content));
};

const read = () => {
  let content = window.localStorage.getItem(KEY_RECIPES_IN_PROGRESS);
  if (!content) {
    save(initialStructureForRecipesInProgress);
    content = initialStructureForRecipesInProgress;
    return content;
  }
  return JSON.parse(content);
};

const recipesInProgress = {
  add(id, ingredients, type) {
    const items = read();
    const itemsOfType = items[type];
    itemsOfType[id] = [...ingredients];
    save(items);
    return items[id];
  },
  get(id, type) {
    const items = read();
    const itemsOfType = items[type];
    return itemsOfType[id];
  },
  getAllFromType(type) {
    const items = read();
    return items[type];
  },
  remove(id, type) {
    const items = read();
    const itemsOfType = items[type];
    if (itemsOfType[id] === undefined) {
      return;
    }
    delete itemsOfType[id];
    save(items);
  },
};

export default recipesInProgress;
