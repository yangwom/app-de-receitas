import React from 'react';
import './App.css';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router';
import Login from './components/Login/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import FavoriteRecipes from './pages/FavoriteRecipes';
import DoneRecipes from './pages/DoneRecipes';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreIngredients from './pages/ExploreIngredients';
import ExploreNationalities from './pages/ExploreNationalities';
import MyProvider from './context/MyContext';
import DetailsRecipesFoods from './pages/DetailsRecipesFoods';
import DetailsRecipesDrinks from './pages/DetailsRecipesDrinks';
import DrinksInProgress from './pages/DrinksInProgress';
import FoodsInProgress from './pages/FoodsInProgress';

function App() {
  return (
    <>
      <div className="title-group">
        <h1>App De Receitas</h1>
        <span>Grupo - 18</span>
      </div>
      <MyProvider>
        <div className="App">
          <Switch>
            <Route exact path="/foods/:id/in-progress" component={ FoodsInProgress } />
            <Route exact path="/drinks/:id/in-progress" component={ DrinksInProgress } />

            <Route
              exact
              path="/explore/drinks/nationalities"
              component={ ExploreNationalities }
            />
            <Route exact path="/foods/:id" component={ DetailsRecipesFoods } />
            <Route exact path="/foods" component={ Foods } />
            <Route exact path="/drinks/:id" component={ DetailsRecipesDrinks } />
            <Route
              exact
              path="/explore/foods/nationalities"
              component={ ExploreNationalities }
            />
            <Route
              exact
              path="/explore/drinks/ingredients"
              component={ ExploreIngredients }
            />
            <Route
              exact
              path="/explore/foods/ingredients"
              component={ ExploreIngredients }
            />
            <Route exact path="/explore/drinks" component={ ExploreDrinks } />
            <Route exact path="/explore/foods" component={ ExploreFoods } />
            <Route exact path="/done-recipes" component={ DoneRecipes } />
            <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
            <Route exact path="/drinks" component={ Drinks } />
            <Route exact path="/profile" component={ Profile } />
            <Route exact path="/explore" component={ Explore } />
            <Route exact path="/" component={ Login } />
          </Switch>
        </div>
      </MyProvider>
    </>
  );
}

export default App;
