import styled, { css } from 'styled-components';

// Create a Layout component that'll render a <section> tag with some styles
export const Layout = styled.section`
  min-height: 100vh;
  background-color: #ffffff;
  width: 100%;
  margin: 0;

  ${props =>
    props.authBg &&
    css`
      background-color: #ff6839;
    `}
`;

// Create a CardWrap component that'll render a <section> tag with some styles
export const DLayout = styled(Layout)`
  padding-top: 8rem;
`;
