import React, {
  PureComponent
} from 'react';
import PropTypes from 'prop-types';
import 'app/styles/global';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from '../../../../assets/react-toolbox/theme';
import '../../../../assets/react-toolbox/theme.css';
import Wrapper from './Wrapper';

export default class App extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          {children}
        </Wrapper>
      </ThemeProvider>
    );
  }
}
