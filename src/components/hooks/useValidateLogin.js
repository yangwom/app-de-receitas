import { useEffect, useState } from 'react';

function Validate() {
  const [disabled, setDisabled] = useState(true);
  const useValidateLogin = (email, password) => {
    useEffect(() => {
      const MIN_CHAR = 6;

      const VALIDATE_BUTTON = (email.includes('@')
       && email.includes('.com')
       && password.length >= MIN_CHAR);

      if (VALIDATE_BUTTON) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }, [email, password]);
  };
  return (
    {
      disabled,
      useValidateLogin,
    }
  );
}

export default Validate;
