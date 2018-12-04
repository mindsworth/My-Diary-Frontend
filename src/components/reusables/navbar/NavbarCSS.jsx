import styled from 'styled-components';

// Create a FormWrap component that'll render a <section> tag with some styles
export const Header = styled.header`
  display: grid;
  grid-template-columns: 20rem auto 25rem;
  height: 7rem;
  background-color: #ffffff;
  align-items: center;
  position: fixed;
  width: 100vw;
  top: 0;
  box-shadow: 0 0 1rem rgba(134, 134, 134, 0.24);
  z-index: 999;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    width: 100%;
  }
`;

// Create a Brand component that'll render a <div> tag with some styles
export const Brand = styled.div`
  background-color: #ff6839;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

// Create a Logo component that'll render a <img> tag with some styles
export const Logo = styled.img`
  height: 4rem;
`;

// Create a Nav component that'll render a <nav> tag with some styles
export const Nav = styled.nav`
  border-right: 2px solid #eee;
  padding: 0.5rem 5rem;
`;

// Create a Ul component that'll render a <ul> tag with some styles
export const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
`;

// Create a Ul component that'll render a <ul> tag with some styles
export const UserUl = styled(Ul)`
  justify-content: center;
`;

// Create a Li component that'll render a <li> tag with some styles
export const Li = styled.li`
  display: inline-block;
  padding: 0 1rem;
  font-weight: 600;
`;

// Create a Fa component that'll render a <i> tag with some styles
export const Fa = styled.i`
  padding: 1rem;
  background-color: #f7f7f7;
  border-radius: 50%;
`;

// Create a FormWrap component that'll render a <section> tag with some styles
export const User = styled.div``;

// Create a ThumbnailWrap component that'll render a <section> tag with some styles
export const ThumbnailWrap = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border: 2px solid #f7f7f7;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

// Create a Thumbnail component that'll render a <img> tag with some styles
export const Thumbnail = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;
