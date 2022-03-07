import React, { useState } from 'react';
import Validate from './hooks/useValidateLogin';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { useValidateLogin, disabled } = Validate();
  useValidateLogin(email, password);

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
      >
        Enter
      </button>
    </form>
  );
}

export default Login;
