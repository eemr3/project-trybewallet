import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCurrencyApi, { walletExpenses } from '../actions';
import Header from '../components/Header';
import Form from '../components/Form';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Table from '../components/Table';

import './Wallet.css';

const method = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagsArray = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valueSpend: '0',
      currency: 'BRL',
      paymentMethod: 'Dinheiro',
      description: '',
      tags: 'Alimentaçaõ',
    };
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,

    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { addExpenses } = this.props;
    addExpenses(this.state);
  }

  render() {
    const { getCurrencyState } = this.props;
    const {
      valueSpend,
      description,
      currency,
      paymentMethod,
      tags } = this.state;
    return (
      <>
        <Header />
        <Form classForm="container" handleSubmitForm={ this.handleSubmit }>
          <Input
            dataTestId="value-input"
            nameInput="valueSpend"
            typeInput="number"
            minValue="0"
            valueInput={ valueSpend }
            handleInputChange={ this.handleInputChange }
            textLabel="Valor"
            idLabel="valor-input"
          />
          <Select
            dataInfo={ getCurrencyState }
            dataTestId="currency-input"
            nameSelect="currency"
            labelSelectText="Moeda"
            idSelect="currency-select"
            selectValue={ currency }
            handleInputChange={ this.handleInputChange }
          />
          <Select
            dataInfo={ method }
            dataTestId="method-input"
            labelSelectText="Método de pagamento"
            idSelect="method-select"
            nameSelect="paymentMethod"
            selectValue={ paymentMethod }
            handleInputChange={ this.handleInputChange }
          />
          <Select
            dataInfo={ tagsArray }
            dataTestId="tag-input"
            labelSelectText="Tag"
            idSelect="tag-select"
            nameSelect="tags"
            selectValue={ tags }
            handleInputChange={ this.handleInputChange }
          />
          <Input
            dataTestId="description-input"
            typeInput="text"
            textLabel="Descrição da despesa"
            idLabel="description-input"
            nameInput="description"
            valueInput={ description }
            handleInputChange={ this.handleInputChange }
          />
          <Button typeBtn="submit">Adicionar despesa</Button>
        </Form>
        <Table />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  getCurrencyState: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (expense) => dispatch(walletExpenses(expense)),
  getCurrency: () => dispatch(fetchCurrencyApi()),
});

Wallet.propTypes = {
  addExpenses: PropTypes.func,
  getCurrency: PropTypes.func,
  getCurrencyState: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Wallet.defaultProps = {
  addExpenses: () => {},
  getCurrency: () => {},
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
