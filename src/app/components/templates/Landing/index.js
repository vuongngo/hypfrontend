import React, {
  PureComponent
} from 'react';
import { Route } from 'react-router-dom';
import Header from 'app/components/organisms/Header';
import Footer from 'app/components/organisms/Footer';
import HomePage from 'app/components/pages/Home';
import Wrapper from './Wrapper';

export default class Landing extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Header />
        <Route path="/" component={HomePage} />
        <Footer />
      </Wrapper>
    );
  }
}
