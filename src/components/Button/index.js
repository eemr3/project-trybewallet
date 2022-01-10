import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { isDisabled, typeBtn, handleClick, children, classNameStyle } = this.props;
    return (
      <button
        type={ typeBtn ? 'submit' : 'button' }
        onClick={ handleClick }
        className={ classNameStyle }
        disabled={ isDisabled }
      >
        {children}

      </button>
    );
  }
}

Button.propTypes = {
  typeBtn: PropTypes.string,
  classNameStyle: PropTypes.string,
  handleClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Button.defaultProps = {
  typeBtn: '',
  classNameStyle: '',
  isDisabled: false,
  handleClick: () => {},
};
export default Button;
