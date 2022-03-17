import React, { memo } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ExploreButtons from '../../components/ExploreButtons';

function ExploreDrinks() {
  return (
    <div>
      <Header>
        Explore Drinks
      </Header>
      <ExploreButtons />
      <Footer />
    </div>
  );
}

export default memo(ExploreDrinks);
