import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';

function Profile() {
  const [useEmail, setUseEmail] = useState('');
  const history = useHistory();

  const emailLocalStorage = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (emailLocalStorage) {
      setUseEmail(emailLocalStorage.email);
    }
  }, []);

  console.log(useEmail);

  return (
    <div>
      <Header>
        Profile
      </Header>
      <div className="container__profile">
        <div className="container__profile--content--email">
          <p
            data-testid="profile-email"
          >
            { useEmail }
          </p>
        </div>
        <div className="container__profile--content--btns">
          <button
            data-testid="profile-done-btn"
            type="button"
            onClick={ () => {
              history.push('/done-recipes');
            } }
          >
            Done Recipes
          </button>
          <button
            data-testid="profile-favorite-btn"
            type="button"
            onClick={ () => {
              history.push('/favorite-recipes');
            } }
          >
            Favorite Recipes
          </button>
          <button
            data-testid="profile-logout-btn"
            type="button"
            onClick={ () => {
              localStorage.clear();
              history.push('/');
            } }
          >
            Logout
          </button>
        </div>

        <p className="phrase">
          Obrigado por usar o nosso App!
        </p>

      </div>
      <Footer />
    </div>
  );
}

export default Profile;
