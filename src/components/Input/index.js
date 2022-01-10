import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { handleInputChange, placeholderText, typeInput, nameInput } = this.props;
    return (
      <input
        type={ typeInput }
        onChange={ handleInputChange }
        placeholder={ placeholderText }
        name={ nameInput }
      />
    );
  }
}

Input.propTypes = {
  placeholderText: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
  nameInput: PropTypes.string,
  handleInputChange: PropTypes.func,
};

Input.defaultProps = {
  nameInput: '',
  handleInputChange: () => {},
};
export default Input;
