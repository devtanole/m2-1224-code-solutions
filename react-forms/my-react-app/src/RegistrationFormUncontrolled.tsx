import { FormEvent } from 'react';

export function UncontrolledForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { username, password } = Object.fromEntries(formData);
    console.log('uncontrolled', { username, password });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          {' '}
          Username:
          <input name="username" type="text" placeholder="Name" />
        </label>
        <label>
          {' '}
          Password:
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
