import styled from 'styled-components';

// Create a H3 component that'll render a <h3> tag with some styles
export const H3 = styled.h3`
  padding-bottom: 3rem;

  ::after {
    content: '';
    width: 100%;
    height: 0.3rem;
    background: #eeeeee;
    display: flex;
  }
`;

// Create a CardWrap component that'll render a <section> tag with some styles
export const CardInner = styled.div`
  // border: 1px solid #000;
`;
