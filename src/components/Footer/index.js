import React from 'react';
import { Link } from 'react-router-dom';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import drinkIcon from '../../images/drinkIcon.svg';
import './style.css';

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer" data-testid="footer">
        <Link to="/foods">
          <img
            src={ mealIcon }
            alt="melalIcon"
            className="icon"
            data-testid="food-bottom-btn"
          />
        </Link>
        <Link to="/explore">
          <img
            src={ exploreIcon }
            alt="exploreIcon"
            className="icon"
            data-testid="explore-bottom-btn"
          />
        </Link>
        <Link to="/drinks">
          <img
            src={ drinkIcon }
            alt="drinkIcon"
            className="icon"
            data-testid="drinks-bottom-btn"
          />
        </Link>
      </footer>
    </div>
  );
}

export default Footer;
