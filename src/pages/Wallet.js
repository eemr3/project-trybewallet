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
import { paymentMethod, tagsArray } from '../data/data';
import './Wallet.css';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: {
        id: 0,
        value: '0',
        currency: '',
        method: 'Dinheiro',
        description: '',
        tag: 'Alimentaçaõ',
      },
    };
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState((prevState) => ({
      expenses: { ...prevState.expenses, [name]: value },
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { addExpenses, getQuotation, getCurrency } = this.props;
    getCurrency();
    this.setState((prevState) => ({
      expenses: { id: prevState.expenses.id + 1,
        value: '0',
        currency: '',
        method: 'Dinheiro',
        description: '',
        tag: 'Alimentaçaõ',
      },
    }));
    const { expenses } = this.state;
    addExpenses({ ...expenses, exchangeRates: getQuotation[0] });
  }

  render() {
    const { getCurrencyState } = this.props;
    const { expenses: {
      value,
      description,
      currency,
      method,
      tag }, total } = this.state;
    return (
      <>
        <Header total={ total } />
        <Form classForm="container" handleSubmitForm={ this.handleSubmit }>
          <Input
            dataTestId="value-input"
            nameInput="value"
            typeInput="number"
            minValue="0"
            valueInput={ value }
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
            dataInfo={ paymentMethod }
            dataTestId="method-input"
            labelSelectText="Método de pagamento"
            idSelect="method-select"
            nameSelect="method"
            selectValue={ method }
            handleInputChange={ this.handleInputChange }
          />
          <Select
            dataInfo={ tagsArray }
            dataTestId="tag-input"
            labelSelectText="Tag"
            idSelect="tag-select"
            nameSelect="tag"
            selectValue={ tag }
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
  getQuotation: state.wallet.quotation,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (expense) => dispatch(walletExpenses(expense)),
  getCurrency: () => dispatch(fetchCurrencyApi()),
});

Wallet.propTypes = {
  addExpenses: PropTypes.func,
  getCurrency: PropTypes.func,
  getCurrencyState: PropTypes.arrayOf(PropTypes.string).isRequired,
  getQuotation: PropTypes.arrayOf(PropTypes.shape({})),
};

Wallet.defaultProps = {
  addExpenses: () => {},
  getCurrency: () => {},
  getQuotation: [],
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
