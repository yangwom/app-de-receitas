import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

function Foods() {
  return (
    <Header>
      Foods
    </Header>
  );
}

Foods.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default Foods;
