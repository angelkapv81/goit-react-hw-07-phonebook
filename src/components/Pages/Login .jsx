import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from 'Api';
import { loginThunk } from 'store/auth/thunks';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk({ email, password }));
    // login({ email, password })
    // .then(res => {
    // console.log(res);
    // повідомлення;
    // navigate('/');
    // });

    console.log('Submitted:', email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" disabled={!email || !password}>
          Ok
        </button>
      </form>
    </div>
  );
};
export default Login;
