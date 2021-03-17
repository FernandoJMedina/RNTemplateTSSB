import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight} from 'react-native';

interface ButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
}

export default function Button({onPress, children}: ButtonProps) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
