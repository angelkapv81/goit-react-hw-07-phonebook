import { signUp } from 'Api';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    signUp({ name, email, password })
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        console.log(error);
      });
    // console.log('Submitted:', name, email, password);
    // тут повідомлення про успішну реєстрацію
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <label>
          Password min 8 symbols:
          <input
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit" disabled={!name || !email || !password}>
          Зареєструватися
        </button>
      </form>
    </div>
  );
};
export default Register;
