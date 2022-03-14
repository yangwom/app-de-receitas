import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Explore() {
  const history = useHistory();
  return (
    <div>
      <Header>
        Explore
      </Header>
      <button
        onClick={ () => history.push('/explore/foods') }
        type="button"
        data-testid="explore-foods"
      >
        Explore Foods

      </button>
      <button
        onClick={ () => history.push('/explore/drinks') }
        type="button"
        data-testid="explore-drinks"
      >
        Explore Drinks

      </button>
      <Footer />
    </div>
  );
}

export default Explore;
