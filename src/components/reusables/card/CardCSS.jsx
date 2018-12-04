import styled from 'styled-components';

// Create a CardWrap component that'll render a <section> tag with some styles
export const CardWrap = styled.div`
  min-height: 10rem;
  background: #f7f7f7;
  padding: 1rem 3rem;
  box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03), 0 1px 2px rgba(102, 119, 136, 0.3);
  margin-bottom: 3rem;
`;

// Create a H4 component that'll render a <h4> tag with some styles
export const H4 = styled.h4`
  font-weight: 600;
  padding: 2rem 0;
  border-bottom: 1px solid #eee;
`;

// Create a H5 component that'll render a <h5> tag with some styles
export const P = styled.p`
  padding: 1rem 0;
`;

// Create a H5 component that'll render a <h5> tag with some styles
export const CardFooter = styled(P)`
  border-top: 1px solid #eee;
  padding: 0;
  padding-top: 1rem;
  font-size: 1.2rem;
`;

// Create a SpanTitle component that'll render a <span> tag with some styles
export const SpanTitle = styled.span`
  float: right;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
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
