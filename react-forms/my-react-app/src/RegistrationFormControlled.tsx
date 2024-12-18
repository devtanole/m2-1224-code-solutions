import { useState, FormEvent } from 'react';

export function ControlledForm() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log('controlled', { user, pass });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          {' '}
          Username:
          <input
            type="text"
            placeholder="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <label>
          {' '}
          Password:
          <input
            type="password"
            placeholder="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
