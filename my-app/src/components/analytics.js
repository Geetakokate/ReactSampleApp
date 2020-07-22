import React from 'react';
import { Row, Col, Card, LabelValue } from 'orion';

const Analytics = () => {
  return (
    <Row>
      <Col>
        <Card
          fullHeight
          body={ () => <LabelValue label='credit balance' value='400' type='primary'/> }
        />
      </Col>
      <Col>
        <Card
          fullHeight
          body={ () => <LabelValue label='Total Source + Changes' value='400' type='primary' unit='B'/> }
        />
      </Col>
      <Col>
        <Card
          fullHeight
          body={ () => <LabelValue label='credit balance' value='400' type='primary' unit='B'/> }
        />
      </Col>
      <Col>
        <Card
          fullHeight
          body={ () => <LabelValue label='credit balance' value='400' type='primary' unit='B' /> }
        />
      </Col>
      <Col>
        <Card
          fullHeight
          body={ () => <LabelValue label='credit balance' value='400' type='primary' unit='x'/> }
        />
      </Col>
    </Row>
  )
};

export default Analytics;