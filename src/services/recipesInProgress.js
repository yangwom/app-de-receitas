const KEY_RECIPES_IN_PROGRESS = 'inProgressRecipes';
const initialStructureForRecipesInProgress = {
  meals: {},
  cocktails: {},
};

const save = (content) => {
  window.localStorage.setItem(KEY_RECIPES_IN_PROGRESS, JSON.stringify(content));
};

const read = () => {
  const content = window.localStorage.getItem(KEY_RECIPES_IN_PROGRESS);
  if (!content) {
    save(initialStructureForRecipesInProgress);
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
    if (!itemsOfType[id]) {
      itemsOfType[id] = this.add(id, [], type);
    }
    return itemsOfType[id];
  },
};

export default recipesInProgress;

// remove(id, type) {
// const items = read();
// const itemsOfType = items[type];
// if (itemsOfType[id] === undefined) {
// return;
// }
// delete itemsOfType[id];
// save(items);
// },
