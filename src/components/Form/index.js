import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { children, handleSubmitForm } = this.props;
    return (
      <form onSubmit={ handleSubmitForm }>
        {children}
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  handleSubmitForm: PropTypes.func,
};

Form.defaultProps = {
  handleSubmitForm: () => {},
};
export default Form;
