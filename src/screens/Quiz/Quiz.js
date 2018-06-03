import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as QuizActions} from '../../redux/ducks/Quiz'


class Quiz extends Component {
  static navigationOptions = {
    title: 'Quiz',

  };


  render() {
    return (
      <View>

      </View>
    );
  }
}

const mapStateToProps = state => ({
  quiz: state.quiz,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(QuizActions, dispatch);

const QuizConnect = connect(mapStateToProps, mapDispatchToProps)(Quiz);
export { QuizConnect as Quiz };

