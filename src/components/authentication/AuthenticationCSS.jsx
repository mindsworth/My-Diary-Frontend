import styled from 'styled-components';
import { Layout } from '../reusables/layout/LayoutCSS';

// Create a FormWrap component that'll render a <section> tag with some styles
export const LayoutAuth = styled(Layout)`
  display: grid;
  grid-template: 1fr;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
// Create a FormWrap component that'll render a <section> tag with some styles
export const FormWrap = styled.div`
  width: 55rem;
  text-align: center;
`;

// Create a Form component that'll render a <section> tag with some styles
export const Form = styled.form`
  background-color: #ffffff;
  padding: 5rem 10rem;
  border-radius: 1rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
`;

// Create a Img component that'll render a <section> tag with some styles
export const Img = styled.img`
  width: 20rem;
  margin-bottom: 4rem;
`;

// Create a FormTitle component that'll render a <section> tag with some styles
export const FormTitle = styled.div`
  margin-bottom: 3rem;
`;

// Create a Title component that'll render a <section> tag with some styles
export const Title = styled.h3`
  color: #ff6839;
`;

// Create a FormGroupWrap component that'll render a <section> tag with some styles
export const FormGroupWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2em;
`;

// Create a FormGroup component that'll render a <section> tag with some styles
export const FormGroup = styled.div`
  margin-bottom: 3rem;
`;

// Create a FormControl component that'll render a <section> tag with some styles
export const FormControl = styled.input`
  width: 100%;
  border: 0;
  color: #222222;
  border-bottom: 1px solid #eee;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 0.5rem 0;

  ::placeholder {
    font-size: 1.4rem;
    font-weight: 500;
    opacity: 0.5;
  }
`;

// Create a FormControl component that'll render a <section> tag with some styles
export const Label = styled.label`
  font-size: 0.9rem;
  display: block;
  text-align: left;
  line-height: 1rem;
  margin-top: 0.5rem;
  color: #ff6839;
`;

// Create a FormControl component that'll render a <section> tag with some styles
export const Loading = styled.div`
  position: absolute;
  right: 5rem;
  bottom: 5rem;
`;
