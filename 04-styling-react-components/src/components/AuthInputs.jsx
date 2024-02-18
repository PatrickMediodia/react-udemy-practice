import { useState } from 'react';
import { styled } from 'styled-components';

import Button from './Button.jsx';
import Input from './Input.jsx';

// tagged templates, regular javascript not react specific
// standard css
// returns a react component that returns a div that has these styles applied
// creates unique class names
// const ControlContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `

// forwards all the props, and then just adds these labels
// building small element wrappers that can be reused
// pass as dynamic values

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }
  
  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800'>
      <div className='flex flex-col gap-2 mb-6'>
        <p>
          <Input
            label="Email"
            invalid={emailNotValid}
            type="email"
            //className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <Input
            label="Password"
            type="password"
            invalid={passwordNotValid}
            //className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('password', event.target.value)}
          />
        </p>
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}