import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router';
import Login from './components/Login';
import Foods from './pages/Foods';
import Camera from './images/camera.png';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import FavoriteRecipes from './pages/FavoriteRecipes';
import DoneRecipes from './pages/DoneRecipes';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreIngredients from './pages/ExploreIngredients';
import ExploreNationalities from './pages/ExploreNationalities';

function App() {
  return (
    <div className="App">
      <img src={ Camera } alt="camera" className="camera" />
      <Switch>
        {/*  <Route exact path="/foods:id" component={} />
      <Route exact path="/foods:id/in-progress" component={} />
      <Route exact path="/drinks:id" component={} />
      <Route exact path="/drinks:id/in-progress" component={} /> */}

        <Route
          exact
          path="/explore/drinks/nationalities"
          component={ ExploreNationalities }
        />
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
        <Route exact path="/explore/foods/ingredients" component={ ExploreIngredients } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/" component={ Login } />
      </Switch>

    </div>
  );
}

export default App;
