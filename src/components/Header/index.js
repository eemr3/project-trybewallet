import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <p data-testid="email-field">{userEmail}</p>
        <p>
          Total das despesas:
          {' '}
          R$
          <span data-testid="total-field">1000,00</span>
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
};

Header.defaultProps = {
  userEmail: '',
};

export default connect(mapStateToProps, null)(Header);
