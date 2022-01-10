import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Input from '../components/Input';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '0',
    };
  }

  handleInputChange = ({ target }) => {
    this.setState({
      value: target.value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <>
        <Header />
        <Form>
          <Input
            data-testid="total-field"
            typeInput="number"
            minValue="0"
            valueInput={ value }
            handleInputChange={ this.handleInputChange }
          />
        </Form>
      </>
    );
  }
}

export default Wallet;
