import React from 'react';
import PropTypes from 'prop-types';

function Select({
  dataTestId,
  dataInfo,
  idSelect,
  labelSelectText,
  selectValue,
  handleInputChange,
  nameSelect }) {
  return (
    <label htmlFor={ idSelect }>
      {labelSelectText}
      <select
        onChange={ handleInputChange }
        value={ selectValue }
        id={ idSelect }
        data-testid={ dataTestId }
        name={ nameSelect }
      >
        {dataInfo.filter((curr) => curr !== 'USDT').map((curr) => (
          <option key={ curr } value={ curr }>{curr}</option>
        ))}
      </select>

    </label>
  );
}

Select.propTypes = {
  idSelect: PropTypes.string,
  selectValue: PropTypes.string,
  dataTestId: PropTypes.string,
  handleInputChange: PropTypes.func,
  nameSelect: PropTypes.string,
  labelSelectText: PropTypes.string,
  dataInfo: PropTypes.arrayOf(PropTypes.string),
};

Select.defaultProps = {
  dataTestId: '',
  dataInfo: [],
  idSelect: '',
  labelSelectText: '',
  nameSelect: '',
  selectValue: '',
  handleInputChange: () => {},
};
export default Select;
