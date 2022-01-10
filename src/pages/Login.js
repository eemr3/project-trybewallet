import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input';
import Form from '../components/Form';
import { loginInfo } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  handleChangeInput = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.validationInputLogin();
    });
  }

  validationInputLogin = () => {
    const { email, password } = this.state;
    const lengthInputPassword = 6;
    if (email === 'alguem@email.com' && password.length >= lengthInputPassword) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { history, submitLogin } = this.props;
    const { email } = this.state;
    submitLogin(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, isDisabled } = this.state;

    return (
      <main>
        <Form handleSubmitForm={ this.handleSubmit }>
          <Input
            dataTestId="email-input"
            placeholderText="E-mail"
            typeInput="email"
            nameInput="email"
            valueInput={ email }
            handleInputChange={ this.handleChangeInput }
          />
          <Input
            dataTestId="password-input"
            placeholderText="Senha"
            typeInput="password"
            nameInput="password"
            valueInput={ password }
            handleInputChange={ this.handleChangeInput }
          />
          <Button isDisabled={ isDisabled } typeBtn="submit">Entrar</Button>
        </Form>
      </main>
    );
  }
}

Login.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

Login.defaultProps = {
  history: {},
};

const mapDispatchToProps = (dispatch) => ({
  submitLogin: (email) => dispatch(loginInfo(email)),
});

export default connect(null, mapDispatchToProps)(Login);
