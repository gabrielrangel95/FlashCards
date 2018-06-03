import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DecksActions} from '../../redux/ducks/Decks'
import { Button } from '../../components';
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

  async componentDidMount(){
    console.log(this.props)
  }

  render() {
    const { selected } = this.props.decks;
    console.log(selected)
    return (
      <Container>
        <DeckCard>
          <DeckImage source={cardsLogo} />
          <DeckTitle>{selected.title}</DeckTitle>
          <DeckSubTitle>{selected.questions.length} card(s)</DeckSubTitle>
          <ButtonView>
            <Button text="Add card" />
          </ButtonView>
          <ButtonView>
            <Button text="Start Quiz" secondary />
          </ButtonView>
        </DeckCard>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.decks,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch);

const DeckConnect = connect(mapStateToProps, mapDispatchToProps)(Deck);
export { DeckConnect as Deck };

