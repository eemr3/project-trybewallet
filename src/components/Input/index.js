import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      handleInputChange,
      placeholderText,
      typeInput,
      nameInput,
      dataTestId } = this.props;
    return (
      <input
        type={ typeInput }
        onChange={ handleInputChange }
        placeholder={ placeholderText }
        name={ nameInput }
        data-testid={ dataTestId }
      />
    );
  }
}

Input.propTypes = {
  placeholderText: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
  typeInput: PropTypes.string.isRequired,
  nameInput: PropTypes.string,
  handleInputChange: PropTypes.func,
};

Input.defaultProps = {
  nameInput: '',
  dataTestId: '',
  handleInputChange: () => {},
};
export default Input;
