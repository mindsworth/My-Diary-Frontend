import styled, { css } from 'styled-components';

// Create a Layout component that'll render a <section> tag with some styles
const Layout = styled.section`
  height: 100vh;
  background-color: #ffffff;
  width: 100%;
  margin: 0;

  ${props =>
    props.authBg &&
    css`
      background-color: #ff6839;
    `}
`;
export default Layout;
