import React from 'react';
import PropTypes from 'prop-types';

import './Table.css';
import { connect } from 'react-redux';

function Table({ getExpenses }) {
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
        {getExpenses.map((expense) => (
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
            <td>Excluir/Editar</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  getExpenses: state.wallet.expenses,
});

Table.propTypes = {
  getExpenses: PropTypes.arrayOf([]),
};

Table.defaultProps = {
  getExpenses: [],
};
export default connect(mapStateToProps)(Table);
