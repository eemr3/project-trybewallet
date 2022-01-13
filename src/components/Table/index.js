import React from 'react';
import PropTypes from 'prop-types';

import './Table.css';
import { connect } from 'react-redux';
import Button from '../Button';
import { deleWalletExpenses } from '../../actions';

function Table({ getExpenses, setExpenses, handleEdit }) {
  const teste = (id) => {
    setExpenses(getExpenses.filter((expense) => expense.id !== id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        { getExpenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>{expense.exchangeRates[expense.currency].name}</td>
            <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
            <td>
              {Number(expense.exchangeRates[expense.currency].ask
               * expense.value).toFixed(2)}
            </td>
            <td>Real</td>
            <td className="cell-edit">
              <Button
                dataTestId="edit-btn"
                handleClick={ () => handleEdit(expense.id) }
              >
                <i className="fas fa-edit fa-2x" />
              </Button>
              {' '}
              <Button
                dataTestId="delete-btn"
                typeBtn="button"
                handleClick={ () => teste(expense.id) }
              >
                <i className="fas fa-trash-alt fa-2x" />

              </Button>

            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  getExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setExpenses: (expense) => dispatch(deleWalletExpenses(expense)),
});

Table.propTypes = {
  getExpenses: PropTypes.arrayOf(PropTypes.shape({})),
  setExpenses: PropTypes.func,
  handleEdit: PropTypes.func,
};

Table.defaultProps = {
  getExpenses: [],
  setExpenses: () => {},
  handleEdit: () => {},
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
