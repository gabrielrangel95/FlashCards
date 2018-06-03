import React, { Component } from 'react';
import {
  Container,
  Title,
} from './MainStyle';

class Main extends Component {
  static navigationOptions = {
    title: 'Flash Cards',
  };
  render() {
    return (
      <Container>
        <Title>FlashCards</Title>
      </Container>
    );
  }
}

export { Main };

