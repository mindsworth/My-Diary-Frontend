// react libraries
import React from 'react';

// IMPORT THIRD PARTY PACKAGES
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// IMPORT STYLED COMPONENTS
import {
  Brand,
  Logo,
  Header,
  List,
  ListWrap,
  BgShapeOne,
  BgShapeTwo,
  HeroTextSmall,
  HeroTextBig,
  HeroTextHype
} from './homeCSS';

// IMPORT COMPONENT
import { Layout } from '../reusables/layout/LayoutCSS';
import Button from '../reusables/buttons/ButtonCSS';

/**
 * @export
 * @class Home
 * @extends {Component}
 */
const Home = () => (
  <Layout>
    <BgShapeOne src="../images/bg-shape1.svg" alt="bg design" />
    <BgShapeTwo src="../images/bg-shape.png" alt="bg design" />
    <Grid bsClass="container-fluid">
      <Header>
        <Brand href="/">
          <Logo src="../images/mydiary_logo_white.png" alt="diari_logo" />
        </Brand>
        <ListWrap>
          <List>
            {/* <ListLink href="./signup.html">Sign Up</ListLink> */}
            <Link to="./signup" className="indexLink">
              Sign Up
            </Link>
          </List>
          <List>
            <Link to="./login" className="indexLink">
              Log in
            </Link>
          </List>
        </ListWrap>
      </Header>
      <Grid>
        <Row>
          <Col md={8}>
            <Col md={12}>
              <HeroTextSmall>Easy-to-use online</HeroTextSmall>
              <HeroTextBig>Diary app for everyone.</HeroTextBig>
            </Col>
            <Col md={7}>
              <HeroTextHype>
                We make your memories accessible from anywhere you deem fit, secured and private.
              </HeroTextHype>
              <Link to="./signup" className="link">
                <Button primary>Get started</Button>
              </Link>
            </Col>
          </Col>
        </Row>
      </Grid>
    </Grid>
  </Layout>
);

export default Home;
