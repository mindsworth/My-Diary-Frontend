import styled from 'styled-components';

// Create a Header component that'll render a <header> tag with some styles
export const Header = styled.header`
  padding: 1rem 3rem;
  display: grid;
  align-items: center;
  grid-template-columns: 18rem auto;
  z-index: 99999;
  position: fixed;
  width: 100%;

  @media (max-width: 768px) {
    padding 1rem 0;
  }
`;

// Create a Brand component that'll render a <a> tag with some styles
export const Brand = styled.a`
  height: 4rem;
`;

// Create a Logo component that'll render a <img> tag with some styles
export const Logo = styled.img`
  height: 4rem;
`;

// Create a ListWrap component that'll render a <ul> tag with some styles
export const ListWrap = styled.ul`
  text-align: right;
  padding-right: 3rem;

  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`;

// Create a List component that'll render a <li> tag with some styles
export const List = styled.li`
  display: inline-block;
  padding: 0 1rem;
`;

// Create a BgShape component that'll render a <img> tag with some styles
export const BgShape = styled.img`
  position: absolute;
  z-index: 0;
`;

// Create a BgShapeOne component that'll render a <img> tag with some styles
export const BgShapeOne = styled(BgShape)`
  height: 50%;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    width: 100%;
    top: -10rem;
  }
`;

// Create a BgShapeTwo component that'll render a <img> tag with some styles
export const BgShapeTwo = styled(BgShape)`
  bottom: 0;
  right: 0%;

  @media (max-width: 768px) {
    width: 100%;
    bottom: -10rem;
    opacity: 
  }
`;

// Create a HeroWrap component that'll render a <div> tag with some styles
export const HeroWrap = styled.div`
  margin-top: 28rem;
`;

// Create a HeroTextSmall component that'll render a <h3> tag with some styles
export const HeroTextSmall = styled.h3`
  margin-top: 40rem;
  line-height: 0;

  @media (max-width: 768px) {
    margin-top: 25rem;
  }
`;

// Create a HeroTextBig component that'll render a <h1> tag with some styles
export const HeroTextBig = styled.h1`
  margin-top: 0;
`;

// Create a HeroTextHype component that'll render a <p> tag with some styles
export const HeroTextHype = styled.p`
  margin-bottom: 3rem;
`;
