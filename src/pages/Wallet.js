import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCurrencyApi, { editWalletExpenses, walletExpenses } from '../actions';
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
      saveOrEdit: false,
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

  handleEditExpenses = (id) => {
    const { getExpenses } = this.props;
    const findExpense = getExpenses.find((exp) => exp.id === id);
    this.setState({
      expenses: {
        id: findExpense.id,
        value: findExpense.value,
        currency: findExpense.currency,
        method: findExpense.method,
        description: findExpense.description,
        tag: findExpense.tag,
      },
      saveOrEdit: true,
    });
  }

  handleEditSubmit = (id) => {
    const { putExpenses, getExpenses } = this.props;
    const findExpenseId = getExpenses.findIndex((index) => index.id === id);
    const { expenses } = this.state;
    const { exchangeRates } = getExpenses[findExpenseId];
    getExpenses[findExpenseId] = { ...expenses, exchangeRates };
    putExpenses(getExpenses);
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
    const { expenses, saveOrEdit } = this.state;
    if (!saveOrEdit) {
      addExpenses({ ...expenses, exchangeRates: getQuotation[0] });
    } else {
      this.handleEditSubmit(expenses.id);
      this.setState({ saveOrEdit: false });
    }
  }

  render() {
    const { getCurrencyState } = this.props;
    const { expenses: {
      value,
      description,
      currency,
      method,
      tag }, saveOrEdit } = this.state;
    return (
      <>
        <Header />
        <Form
          classForm="container"
          handleSubmitForm={ this.handleSubmit }
        >
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
          {!saveOrEdit
            ? <Button typeBtn="submit">Adicionar despesa</Button>
            : <Button typeBtn="submit">Editar despesa</Button>}
        </Form>
        <Table handleEdit={ this.handleEditExpenses } />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  getCurrencyState: state.wallet.currencies,
  getQuotation: state.wallet.quotation,
  getExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (expense) => dispatch(walletExpenses(expense)),
  getCurrency: () => dispatch(fetchCurrencyApi()),
  putExpenses: (id) => dispatch(editWalletExpenses(id)),
});

Wallet.propTypes = {
  addExpenses: PropTypes.func,
  getCurrency: PropTypes.func,
  getCurrencyState: PropTypes.arrayOf(PropTypes.string).isRequired,
  getQuotation: PropTypes.arrayOf(PropTypes.shape({})),
  getExpenses: PropTypes.arrayOf(PropTypes.shape({
    exchangeRates: PropTypes.shape({}),
  })),
  putExpenses: PropTypes.func,
};

Wallet.defaultProps = {
  addExpenses: () => {},
  getCurrency: () => {},
  getQuotation: [],
  getExpenses: [],
  putExpenses: () => {},
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
