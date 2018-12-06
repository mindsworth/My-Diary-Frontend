// third party libraries
import styled, { css } from 'styled-components';

// Create a ThumbnailWrap component that'll render a <section> tag with some styles
export const ThumbnailWrap = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border: 2px solid #ddd;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  ${props =>
    props.bigThumbnail &&
    css`
      width: 20rem;
      height: 20rem
      border: 5px solid #eee;
      margin: 0 auto;
      display: block;
    `}
`;

// Create a Thumbnail component that'll render a <img> tag with some styles
export const Thumbnail = styled.img`
  max-width: 100%;
  border-radius: 50%;
`;
