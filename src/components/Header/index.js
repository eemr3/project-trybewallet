import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Header.css';

class Header extends Component {
  render() {
    const { userEmail, walletExpesseTotal } = this.props;
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
            {walletExpesseTotal.length === 0 ? '0'
              : walletExpesseTotal
                .reduce((acc, curr) => acc + Number(curr.valueSpend), 0)}
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
  walletExpesseTotal: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string,
  walletExpesseTotal: PropTypes.arrayOf(PropTypes.shape({
    valueSpend: PropTypes.number,
  })),
};

Header.defaultProps = {
  userEmail: '',
  walletExpesseTotal: {},
};

export default connect(mapStateToProps, null)(Header);
