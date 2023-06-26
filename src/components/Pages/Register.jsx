import React from 'react';

const Register = () => {
  return (
    <div>
      сторінка для реєстрації
      <form
      // onSubmit={handleSubmit}
      >
        <label>
          Ім'я:
          <input
            type="text"
            // value={name} onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          Електронна пошта:
          <input
            type="email"
            // value={email}
            // onChange={handleEmailChange}
          />
        </label>
        <br />
        <label>
          Пароль:
          <input
            type="text"
            // value={email}
            // onChange={handleEmailChange}
          />
        </label>
        <br />
        <label>
          Повторити пароль:
          <input
            type="text"
            // value={email}
            // onChange={handleEmailChange}
          />
        </label>
        <br />
        <button type="submit">Зареєструватися</button>
      </form>
    </div>
  );
};
export default Register;
