import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as loginActions } from '~/store/ducks/login';

import { ActivityIndicator } from 'react-native';

import {
  Container, Input, Button, ButtonText, Error,
} from './styles';

class Login extends Component {
  state = {
    username: '',
  };

  handleSubmit = async () => {
    const { username } = this.state;
    const { loginRequest } = this.props;

    loginRequest(username);
  };

  render() {
    const { username } = this.state;
    const { error, loading } = this.props;

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
          { loading ? <ActivityIndicator size="small" color="#FFF" /> : <ButtonText>Entrar</ButtonText> }
        </Button>
      </Container>
    );
  }
}

// MAP STATE and ACTIONS
const mapStateToProps = state => ({
  error: state.login.error,
  loading: state.login.loading,
});

const mapActionsToProps = dispatch => bindActionCreators(loginActions, dispatch);
//

export default connect(mapStateToProps, mapActionsToProps)(Login);
