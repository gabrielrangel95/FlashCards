import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DecksActions} from '../../redux/ducks/Decks'

import {
  Container
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
        <Text>Current Deck: {selected.title}</Text>
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

