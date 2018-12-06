import styled from 'styled-components';

// Create a H3 component that'll render a <h3> tag with some styles
export const H3 = styled.h3`
  padding-bottom: 2rem;
  display: flex;

  ::after {
    padding-left: 3rem;
    content: '';
    flex-grow: 1;
    height: 0.3rem;
    background: linear-gradient(to right, #ff6839 0%, #c0392b 60%);
    margin-top: 1.5rem;
    margin-left: 1.5rem;
  }
`;

// Create a ArticleWrap component that'll render a <div> tag with some styles
export const ArticleWrap = styled.div`
  padding-top: 10rem;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 5rem;
    bottom: 0;
    background: linear-gradient(to top, #f2f2f2 0%, transparent 60%);
  }
`;

// Create a ArticleBody component that'll render a <div> tag with some styles
export const ArticleBody = styled.div`
  max-height: 65vh;
  overflow: scroll;
  border-top: 1rem solid #ddd;
`;
