// IMPORT THIRD PARTY PACKAGES
import styled, { css } from 'styled-components';

// Create a Button component that'll render an <button> tag with some styles
const Button = styled.button`
  border: 1px solid #ff6839;
  border-radius: 30px;
  font-size: 1.8rem;
  padding: 1.2rem 3rem;
  color: #ff6839;
  font-weight: 700;

  :hover {
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
  }

  ${props =>
    props.primary &&
    css`
      background-color: #ff6839;
      color: #ffffff;
      border: 3px solid rgb(253, 195, 166);
    `}
`;

export default Button;
