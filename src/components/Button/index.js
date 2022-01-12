import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      isDisabled,
      typeBtn,
      handleClick,
      children,
      classNameStyle,
      dataTestId } = this.props;
    return (
      <button
        type={ typeBtn ? 'submit' : 'button' }
        onClick={ handleClick }
        className={ classNameStyle }
        disabled={ isDisabled }
        data-testid={ dataTestId }
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
  dataTestId: PropTypes.string,
};

Button.defaultProps = {
  typeBtn: '',
  classNameStyle: '',
  isDisabled: false,
  handleClick: () => {},
  dataTestId: '',
};
export default Button;
