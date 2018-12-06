import styled, { css } from 'styled-components';

// Create a CardWrap component that'll render a <section> tag with some styles
export const CardWrap = styled.div`
  min-height: 10rem;
  background: #f7f7f7;
  padding: 1rem 3rem;
  box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03), 0 1px 2px rgba(102, 119, 136, 0.3);
  margin-bottom: 1rem;

  :nth-child(odd) {
    background-color: #fff;
  }

  :last-child {
    margin-bottom: 5rem;
  }

  ${props =>
    props.userCard &&
    css`
      /* background: #ff6839 !important; */
      padding: 15rem 0 3rem;
      background: linear-gradient(45deg, #ff6839 0%, #d35400 80%) !important;
    `}
`;

// Create a H4 component that'll render a <h4> tag with some styles
export const H4 = styled.h4`
  font-weight: 600;
  padding: 2rem 0;
  border-bottom: 1px solid #eee;
  position: relative;
`;

// Create a H5 component that'll render a <h5> tag with some styles
export const P = styled.p`
  padding: 1rem 0;
  ${props =>
    props.CardFooter &&
    css`
      border-top: 1px solid #eee;
      padding: 0;
      padding-top: 1rem;
      font-size: 1.2rem;
    `}
  ${props =>
    props.username &&
    css`
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      padding: 1rem 0;
      font-size: 2rem;
      text-align: center;
      font-weight: 900;
      margin-top: 2rem;
      color: #f7f7f7;
    `}
`;

// Create a SpanTitle component that'll render a <span> tag with some styles
export const SpanTitle = styled.span`
  float: right;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;

  ${props =>
    props.toggleDrowndown &&
    css`
      background: #ddd;
      color: #ff6839;
    `}

  :hover {
    background: #ddd;
    color: #ff6839;
  }
`;

// Create a SpanFav component that'll render a <span> tag with some styles
export const SpanFav = styled.span`
  float: right;
  padding: 0.5rem 0.9rem;
  border-radius: 50%;
  cursor: pointer;
  color: #222;
  background: #ddd;
  :hover {
    color: #ff6839;
  }
`;

// Create a CardDropdown component that'll render a <div> tag with some styles
export const CardDropdown = styled.div`
  position: absolute;
  right: 0.5rem;
  bottom: -130%;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-top: 2px solid #ff6839;
  display: none;

  ${props =>
    props.toggleDrowndown &&
    css`
      display: block;
    `}

  ::before {
    content: '';
    border-bottom: 1rem solid #ff6839;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    position: absolute;
    top: -1rem;
    right: 0;
  }

  p {
    padding: 1rem 5rem 1rem 1rem;
    margin: 0;
    font-weight: 500;
    font-size: 1.4rem;
    border-bottom: 1px solid #e5e5e5;
    text-align: left;
    cursor: pointer;

    :last-child {
      border: none;
    }

    .fas {
      padding-right: 1rem;
    }

    :hover {
      background-color: #f7f7f7;
    }
  }
`;
