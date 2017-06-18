import React, { PureComponent } from 'react';

// Components
import Container from 'app/components/atoms/Container';
import { Row, Col } from 'app/components/molecules/Grid';
import Avatar from 'app/components/atoms/Avatar';
import Button from 'react-toolbox/lib/button/Button';
import Wrapper from './Wrapper';

export default class Home extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Col xs={3}>
              <Button label="Hello World!" />
            </Col>
            <Col xs={3}>
              <h1>Home</h1>
            </Col>
            <Col xs={3}>
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_yPmcYRlFNFB5PcmJmZPPe4MV9wLTvn_eR745tIqcQKUpByIR5GvQuA" />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
