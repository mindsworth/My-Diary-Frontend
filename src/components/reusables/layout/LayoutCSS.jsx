import styled, { css } from 'styled-components';

// Create a Layout component that'll render a <section> tag with some styles
const Layout = styled.section`
  min-height: 100vh;
  background-color: #f2f2f2;
  width: 100%;
  margin: 0;

  ${props =>
    props.authBg &&
    css`
      background: linear-gradient(45deg, #ff6839 0%, #d35400 80%) !important;
    `}

  ${props =>
    props.dashboard &&
    css`
      padding-top: 8rem;
    `}
`;
export default Layout;
