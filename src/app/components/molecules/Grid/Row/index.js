/**
 *
 * Row
 *
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  flex-wrap: wrap;
  justify-content: ${props => props.justifyContent || 'inherit'};
  align-content: ${props => props.alignContent || 'inherit'};
  align-items: ${props => props.alignItems || 'inherit'};
`;

Row.propTypes = {
  justifyContent: PropTypes.string,
  alignContent: PropTypes.string,
  alignItems: PropTypes.string
};

export default Row;
