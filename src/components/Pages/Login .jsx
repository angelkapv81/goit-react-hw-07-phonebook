import React from 'react';

const Login = () => {
  return (
    <div>
      сторінка НЕ для реєстрації
      <form
      // onSubmit={handleSubmit}
      >
        <label>
          Email
          <input
            type="email"
            // value={name} onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="text"
            // value={email}
            // onChange={handleEmailChange}
          />
        </label>
        <br />
        <button type="submit">Ввійти</button>
      </form>
    </div>
  );
};
export default Login;
