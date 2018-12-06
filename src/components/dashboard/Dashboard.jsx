// react libraries
import React, { Component } from 'react';

// third party libraries
import { Grid, Row, Col } from 'react-bootstrap';

// components
import Navbar from '../reusables/navbar/Navbar';
import Layout from '../reusables/layout/LayoutCSS';
import Card from '../reusables/card/Card';
import { H3, ArticleWrap, ArticleBody } from './DashboardCSS';
import UserCard from '../reusables/UserCard/UserCard';
/**
 * @export
 * @class Login
 * @extends {Component}
 * @param{event} event
 * @param{index} index
 */
export class Dashboard extends Component {
  state = {
    toggleCardDropdown: null
  };

  handleCardDropdownOnClick = (event, index) => {
    event.preventDefault();
    const { toggleCardDropdown } = this.state;
    this.setState({
      toggleCardDropdown: toggleCardDropdown === index ? null : index
    });
  };

  render() {
    const { toggleCardDropdown } = this.state;
    const entries = ['a', 'b', 'c', 'd', 'e'];
    return (
      <Layout>
        <Navbar />
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4}>
              <UserCard />
            </Col>
            <Col xs={12} md={8}>
              <ArticleWrap>
                <H3>List of entries</H3>
                <ArticleBody>
                  {entries.map((entry, i) => (
                    <Card
                      key={entry}
                      onclick={event => this.handleCardDropdownOnClick(event, i)}
                      toggleDropdown={toggleCardDropdown === i}
                    />
                  ))}
                </ArticleBody>
              </ArticleWrap>
            </Col>
          </Row>
        </Grid>
      </Layout>
    );
  }
}

export default Dashboard;
