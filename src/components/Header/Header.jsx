import React from 'react';
import { NavLink } from 'react-router-dom';

// import { Container, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {/* <NavLink index></NavLink> */}
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      {/* <StyledNavLink exact="true" to="/">
         Home
       </StyledNavLink>

      <StyledNavLink to="/movies">Movies</StyledNavLink> */}
    </div>
  );
};

export default Header;

// import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

// export const Container = styled.nav`
//   background-color: #f8f9fa;
//   padding: 1rem;
// `;

// export const StyledNavLink = styled(NavLink)`
//   margin-right: 1rem;
//   color: #212529;
//   text-decoration: none;
//   font-weight: bold;

//   &.active {
//     color: red;
//   }
// `;
