import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Header.css';

class Header extends Component {
  render() {
    const { userEmail, total } = this.props;
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
});

Header.propTypes = {
  userEmail: PropTypes.string,
  total: PropTypes.number,
  // walletExpesseTotal: PropTypes.arrayOf(PropTypes.shape({
  //   valueSpend: PropTypes.string,
  // })),
};

Header.defaultProps = {
  userEmail: '',
  total: 0,
  // walletExpesseTotal: {},
};

export default connect(mapStateToProps, null)(Header);
