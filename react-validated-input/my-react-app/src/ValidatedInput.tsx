import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

export function ValidatedInput() {
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const checkLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPass(value);

    if (value.length === 0) {
      setError('A password is required.');
    } else if (value.length < 8) {
      setError('Password must be at least 8 characters.');
    } else {
      setError('');
    }
  };
  return (
    <>
      <div className="wrapper">
        <label>
          Password:
          <input
            type="password"
            name="myPassword"
            value={pass}
            onChange={checkLength}
          />
          {error ? (
            <FaTimes style={{ color: 'red' }} />
          ) : pass.length >= 8 ? (
            <FaCheck style={{ color: 'green' }} />
          ) : null}
        </label>

        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
}
