import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Foods({ history }) {
  return (
    <div>
      <Header history={ history }>
        Foods
      </Header>
      <Footer />
    </div>

  );
}

Foods.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default Foods;
