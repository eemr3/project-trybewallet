import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { children, handleSubmitForm, classForm } = this.props;
    return (
      <form onSubmit={ handleSubmitForm } className={ classForm }>
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
  classForm: PropTypes.string,
};

Form.defaultProps = {
  handleSubmitForm: () => {},
  classForm: '',
};
export default Form;
