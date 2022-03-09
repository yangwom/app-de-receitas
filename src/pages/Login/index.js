import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Validate from '../../components/hooks/useValidateLogin';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { useValidateLogin, disabled } = Validate();
  const history = useHistory();
  useValidateLogin(email, password);
  const onClickButton = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('foods');
  };

  return (
    <form>
      <input
        type="email"
        onChange={ (e) => setEmail(e.target.value) }
        placeholder="EMAIL"
        value={ email }
        data-testid="email-input"
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="PASSWORD"
        onChange={ (e) => setPassword(e.target.value) }
        value={ password }
      />
      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={ disabled }
        onClick={ onClickButton }
      >
        Enter
      </button>
    </form>
  );
}

export default Login;
