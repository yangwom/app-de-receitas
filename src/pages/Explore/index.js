import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';

function Explore() {
  const history = useHistory();
  return (
    <div>
      <Header>
        Explore
      </Header>
      <div className="container--buttons">
        <button
          onClick={ () => history.push('/explore/foods') }
          type="button"
          data-testid="explore-foods"
          className="btn-explorer"
        >
          Explore Foods

        </button>
        <button
          onClick={ () => history.push('/explore/drinks') }
          type="button"
          data-testid="explore-drinks"
          className="btn-explorer"
        >
          Explore Drinks

        </button>

      </div>
      <Footer />
    </div>
  );
}

export default Explore;
