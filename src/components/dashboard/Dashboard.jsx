// react libraries
import React from 'react';

// third party libraries
import { Grid, Row, Col } from 'react-bootstrap';

// components
import Navbar from '../reusables/navbar/Navbar';
import { DLayout } from '../reusables/layout/LayoutCSS';
import Card from '../reusables/card/Card';
import { H3 } from './DashboardCSS';

/**
 * @export
 * @class Login
 * @extends {Component}
 */
const Dashboard = () => (
  <DLayout>
    <Navbar />
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={8} mdOffset={2}>
          <H3>List of articles</H3>
          <Card />
          <Card />
        </Col>
      </Row>
    </Grid>
  </DLayout>
);

export default Dashboard;
