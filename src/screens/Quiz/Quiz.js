import React, { Component } from 'react';
import { Alert } from 'react-native';

//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as QuizActions } from '../../redux/ducks/Quiz'
import { Creators as DecksActions} from '../../redux/ducks/Decks'

//ui
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../styles'
import { Button } from '../../components';
import {
  Container,
  QuizCard,
  TextProgress,
  TextQuestion,
  ViewAnswerButtons,
  AnswerButtons,
  TextShowAnswer,
  TextScore,
  TextAswer,
  FinishButtonView
} from './QuizStyle'
import { clearNotifications, notificationsConfig } from '../../services/notification';

class Quiz extends Component {
  static navigationOptions = {
    title: 'Quiz'
  };


  state = {
    lasAnswerShowed: null,
    finalScore: null
  }

  handleCorrectPressed = async() => {
    if (this.verifyAnswerShowed()) {
      const { score, progress, questions } = this.props.quiz;
      await this.props.setQuizScore(score + 1);
      this.goToNextQuestion()
    }
  }

  handleIncorrectPressed = () => {
    if (this.verifyAnswerShowed()) {
      this.goToNextQuestion()
    }
  }

  goToNextQuestion = async () => {
    const { score, progress, questions } = this.props.quiz;
    const numberOfQuestions = questions.length;

    if (progress + 1 !== numberOfQuestions) {
      this.props.setQuizCurrentQuestion(questions[progress + 1]);
      this.props.setQuizProgress(progress + 1);
    } else {
      var finalScore = (score / numberOfQuestions) * 100;
      finalScore = finalScore.toFixed(2);
      console.log(finalScore);
      await this.setState({ finalScore })
      this.configNotifications();
    }

  }

  configNotifications = () => {
    clearNotifications();
    notificationsConfig();
  }

  showQuiz = (progress) => {
    this.setState({ lasAnswerShowed: progress })
    this.props.showQuizAnswer()
  }

  verifyAnswerShowed = () => {
    const { progress } = this.props.quiz;
    if (this.state.lasAnswerShowed !== progress) {
      Alert.alert('You must see the answer before set correct or incorrect!')
      return false
    } else {
      return true
    }
  }

  handleRestartQuiz = async() => {
    this.configNotifications();
    const { selected } = this.props.decks;
    //setup quiz
    await this.props.restarQuiz()
    await this.props.setQuizQuestions(selected.questions);
    await this.props.setQuizCurrentQuestion(selected.questions[0]);
    await this.setState({ lasAnswerShowed: null, finalScore: null });
  }


  render() {
    const { questions, score, progress, currentQuestion, showAnswer } = this.props.quiz
    const questionsTotalNumber = questions.length

    const { goBack } = this.props.navigation;

    if (this.state.finalScore) {
      console.log('entrou')
      return (
        <Container>
          <TextScore>Your Score: {this.state.finalScore}%</TextScore>
          <FinishButtonView>
            <Button text="Finish" onPress={()=> goBack()}/>
          </FinishButtonView>
          <FinishButtonView>
            <Button secondary text="Restart Quiz" onPress={()=> this.handleRestartQuiz()}/>
          </FinishButtonView>
        </Container>
      )
    }

    return (
      <Container>
        <TextProgress>{progress + 1}/{questionsTotalNumber}</TextProgress>
        {
          showAnswer ? (
            <QuizCard>
              <TextAswer>{currentQuestion.answer}</TextAswer>
              <TextShowAnswer onPress={() => this.props.hideQuizAnswer()}>Show Question</TextShowAnswer>
            </QuizCard>
          ) : (
              <QuizCard>
                <TextQuestion>{currentQuestion.question}</TextQuestion>
                <TextShowAnswer onPress={() => this.showQuiz(progress)}>Show answer</TextShowAnswer>
                <ViewAnswerButtons>
                  <AnswerButtons onPress={() => this.handleCorrectPressed()}>
                    <FontAwesome name="check" size={30} color={colors.success} />
                  </AnswerButtons>
                  <AnswerButtons onPress={() => this.handleIncorrectPressed()}>
                    <FontAwesome name="close" size={30} color={colors.danger} />
                  </AnswerButtons>
                </ViewAnswerButtons>
              </QuizCard>
            )
        }
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  quiz: state.quiz,
  decks: state.decks,
});

const mapDispatchToProps = (dispatch) => {
  const boundDecksCreators = bindActionCreators(DecksActions, dispatch);
  const boundQuizCreators = bindActionCreators(QuizActions, dispatch)
  const allActionProps = { ...boundDecksCreators, ...boundQuizCreators, dispatch };
  return allActionProps;
};

const QuizConnect = connect(mapStateToProps, mapDispatchToProps)(Quiz);
export { QuizConnect as Quiz };

