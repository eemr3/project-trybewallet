import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      handleInputChange,
      placeholderText,
      typeInput,
      nameInput,
      minValue,
      valueInput,
      dataTestId } = this.props;
    return (
      <input
        type={ typeInput }
        onChange={ handleInputChange }
        placeholder={ placeholderText }
        name={ nameInput }
        data-testid={ dataTestId }
        min={ minValue }
        value={ valueInput }
      />
    );
  }
}

Input.propTypes = {
  placeholderText: PropTypes.string,
  dataTestId: PropTypes.string,
  typeInput: PropTypes.string.isRequired,
  minValue: PropTypes.string,
  nameInput: PropTypes.string,
  handleInputChange: PropTypes.func,
  valueInput: PropTypes.string,
};

Input.defaultProps = {
  placeholderText: '',
  nameInput: '',
  valueInput: '',
  minValue: '',
  dataTestId: '',
  handleInputChange: () => {},
};
export default Input;
