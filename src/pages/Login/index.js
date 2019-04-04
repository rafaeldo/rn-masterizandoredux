import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '~/store/actions/login';

import api from '~/services/api';

import {
  Container, Input, Button, ButtonText, Error,
} from './styles';

class Login extends Component {
  state = {
    username: '',
  };

  handleSubmit = async () => {
    const { username } = this.state;
    const { loginSuccess, loginFailure, navigation } = this.props;

    try {
      await api.get(`/users/${username}`);

      loginSuccess(username);
      navigation.navigate('Repositories');
    } catch (err) {
      loginFailure();
    }
  };

  render() {
    const { username } = this.state;
    const { error } = this.props;

    return (
      <Container>
        { error && <Error>Usuário não existe</Error> }

        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário"
          value={username}
          onChangeText={text => this.setState({ username: text })}
        />
        <Button onPress={this.handleSubmit}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Container>
    );
  }
}

// MAP STATE and ACTIONS
const mapStateToProps = state => ({
  error: state.login.error,
});

const mapActionsToProps = dispatch => bindActionCreators(loginActions, dispatch);
//

export default connect(mapStateToProps, mapActionsToProps)(Login);