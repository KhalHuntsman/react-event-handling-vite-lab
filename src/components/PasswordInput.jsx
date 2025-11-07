import { useState } from 'react';

function PasswordInput() {
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setPassword(e.target.value);
    console.log('Entering password...', e.target.value); // Use three dots for the test
  };

  return (
    <input
      type="password"
      value={password}
      onChange={handleChange}
      placeholder="Enter your password"
    />
  );
}

export default PasswordInput;
