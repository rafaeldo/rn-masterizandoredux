import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as reposActions } from '~/store/ducks/repositories';

import { ActivityIndicator, Text } from 'react-native';
import { Container } from './styles';

class Repositories extends Component {
  componentDidMount() {
    const { loadRepos } = this.props;

    loadRepos();
  }

  render() {
    const { repositories } = this.props;

    return (
      <Container>
        {repositories.loading ? (
          <ActivityIndicator size="small" color="#999" />
        ) : (
          repositories.data.map(repo => <Text key={repo.id}>{repo.name}</Text>)
        )}
      </Container>
    );
  }
}

// MAP STATE and ACTIONS
const mapStateToProps = state => ({
  repositories: state.repositories,
});

const mapActionsToProps = dispatch => bindActionCreators(reposActions, dispatch);
//

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(Repositories);
