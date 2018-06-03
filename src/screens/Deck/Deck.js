import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DecksActions} from '../../redux/ducks/Decks'
import { Creators as CardActions } from '../../redux/ducks/Cards';
import { Creators as QuizActions } from '../../redux/ducks/Quiz';
import { Button, ModalCreateCard } from '../../components';
import {
  Container,
  DeckCard,
  DeckImage,
  DeckTitle,
  DeckSubTitle,
  ButtonView
} from './DeckStyle';

const cardsLogo = require('../../resources/cardslogo.png');

class Deck extends Component {
  static navigationOptions = {
    title: 'Deck'
  };

  startQuiz = async () => {
    const { selected } = this.props.decks;
    //setup quiz
    await this.props.restarQuiz()
    await this.props.setQuizQuestions(selected.questions);
    await this.props.setQuizCurrentQuestion(selected.questions[0]);
    this.props.navigation.navigate('Quiz')
  }


  render() {
    const { selected } = this.props.decks;
    return (
      <Container>
        <ModalCreateCard />
        <DeckCard>
          <DeckImage source={cardsLogo} />
          <DeckTitle>{selected.title}</DeckTitle>
          <DeckSubTitle>{selected.questions.length} card(s)</DeckSubTitle>
          <ButtonView>
            <Button text="Add card" onPress={()=>{this.props.openCardsModal()}} />
          </ButtonView>
          <ButtonView>
            <Button text="Start Quiz" secondary onPress={()=> this.startQuiz()} />
          </ButtonView>
        </DeckCard>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.decks,
  cards: state.cards
});


const mapDispatchToProps = (dispatch) => {
  const boundDecksCreators = bindActionCreators(DecksActions, dispatch);
  const boundCardsCreators = bindActionCreators(CardActions, dispatch);
  const boundQuizCreators = bindActionCreators(QuizActions, dispatch)
  const allActionProps = { ...boundDecksCreators, ...boundCardsCreators, ...boundQuizCreators, dispatch };
  return allActionProps;
};

const DeckConnect = connect(mapStateToProps, mapDispatchToProps)(Deck);
export { DeckConnect as Deck };

