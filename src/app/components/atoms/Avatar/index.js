/**
 *
 * Avatar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Avatar(props) {
  const styles = require('./styles.scss');
  const lClass = props.large ? styles.large : styles.small;
  return (
    <img
      className={classNames(props.className, lClass)}
      src={props.src}
      alt={props.alt}
      onClick={props.onClick}
    />
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  large: PropTypes.boolean,
  alt: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Avatar.defaultProps = {
  alt: 'avatar',
};

export default Avatar;
