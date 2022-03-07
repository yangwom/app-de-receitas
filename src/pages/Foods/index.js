import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

function Foods({ history }) {
  return (
    <Header history={ history }>
      Foods
    </Header>
  );
}

Foods.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default Foods;
