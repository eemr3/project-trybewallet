import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Header.css';

class Header extends Component {
    calcExpenses = () => {
      const { getExpenses } = this.props;
      if (getExpenses.length !== 0) {
        const totalExpense = getExpenses.reduce((acc, expense) => {
          if (expense.currency === expense.exchangeRates[expense.currency].code) {
            acc += (
              Number(expense.value) * Number(expense.exchangeRates[expense.currency].ask)
            );
            return acc;
          }
          return acc;
        }, 0);
        return totalExpense;
      }
      return 0;
    }

    render() {
      const { userEmail } = this.props;
      const total = this.calcExpenses();
      return (
        <header>
          <h1>TrybeWallet</h1>
          <p data-testid="email-field">
            Olá
            {' '}
            {userEmail}
          </p>
          <p>
            Total das despesas:
            {' '}
            R$
            <span data-testid="total-field">

              {total ? total.toFixed(2) : 0}
            </span>
            {' '}
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </header>
      );
    }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  getExpenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string,
  getExpenses: PropTypes.arrayOf(PropTypes.shape({})),
};

Header.defaultProps = {
  userEmail: '',
  getExpenses: [{}],
};

export default connect(mapStateToProps, null)(Header);
