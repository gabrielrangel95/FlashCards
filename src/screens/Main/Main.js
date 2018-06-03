import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import * as services  from '../../services/AsyncStorage';
import {
  Container,
  CardItem,
  CardImage,
  CardTitle,
  CardSubTitle,
  CardSubView
} from './MainStyle';

const cardsLogo = require('../../resources/cardslogo.png');

class Main extends Component {
  static navigationOptions = {
    title: 'Flash Cards',
  };

  state = {
    cards: [],

  }

  async componentDidMount(){
    const cards = await services.getCardsList();
    console.log(cards);
    this.setState({ cards });
  }

  renderItem = ({item}) => {
    return(
      <CardItem>
        <CardImage source={cardsLogo}/>
        <CardSubView>
          <CardTitle>{item.title}</CardTitle>
          <CardSubTitle>{item.questions.length} card(s)</CardSubTitle>
        </CardSubView>
      </CardItem>
    )
  }

  render() {
    const { cards } = this.state;
    return (
      <Container>
        <FlatList
          keyExtractor={item => item.title}
          data={cards}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}

export { Main };

