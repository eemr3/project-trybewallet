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
      idLabel,
      dataTestId,
      textLabel } = this.props;
    return (
      <label htmlFor={ idLabel }>
        {textLabel}
        <input
          id={ idLabel }
          type={ typeInput }
          onChange={ handleInputChange }
          placeholder={ placeholderText }
          name={ nameInput }
          data-testid={ dataTestId }
          min={ minValue }
          value={ valueInput }
        />

      </label>
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
  idLabel: PropTypes.string,
  textLabel: PropTypes.string,
};

Input.defaultProps = {
  placeholderText: '',
  nameInput: '',
  valueInput: '',
  minValue: '',
  dataTestId: '',
  idLabel: '',
  textLabel: '',
  handleInputChange: () => {},
};
export default Input;
