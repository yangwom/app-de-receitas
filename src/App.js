import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router';
import './App.css';
import Login from './components/Login/Login';
import PageNotFound from './components/PageNotFound';
import MyProvider from './context/MyContext';
import DetailsRecipesDrinks from './pages/DetailsRecipesDrinks';
import DetailsRecipesFoods from './pages/DetailsRecipesFoods';
import DoneRecipes from './pages/DoneRecipes';
import Drinks from './pages/Drinks';
import DrinksInProgress from './pages/DrinksInProgress';
import Explore from './pages/Explore';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreIngredientsDrinks from './pages/ExploreIngredientsDrinks';
import ExploreIngredientsFoods from './pages/ExploreIngredientsFoods';
import ExploreFoods from './pages/ExploreFoods';
import ExploreNationalities from './pages/ExploreNationalities';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Foods from './pages/Foods';
import FoodsInProgress from './pages/FoodsInProgress';
import Profile from './pages/Profile';

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
              component={ PageNotFound }
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
              component={ ExploreIngredientsDrinks }
            />
            <Route
              exact
              path="/explore/foods/ingredients"
              component={ ExploreIngredientsFoods }
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
