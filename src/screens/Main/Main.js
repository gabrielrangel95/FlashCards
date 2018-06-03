import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MaterialIcons } from '@expo/vector-icons'
import { Creators as DecksActions} from '../../redux/ducks/Decks'
import { ModalCreateDeck, HeaderIcon } from '../../components';
import {
  Container,
  CardItem,
  CardImage,
  CardTitle,
  CardSubTitle,
  CardSubView,
} from './MainStyle';


const cardsLogo = require('../../resources/cardslogo.png');

class Main extends Component {
  static navigationOptions = {
    title: 'Flash Cards',
    headerRight: (<HeaderIcon/>)

  };

  state = {
    modalVisible: false,
  }

  async componentDidMount(){
    await this.props.getDecksRequest()
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
    const { data } = this.props.decks;
    return (
      <Container>
        <ModalCreateDeck
          modalVisible={this.state.modalVisible}
          closeModal={this.closeModal}
        />
        <FlatList
          keyExtractor={item => item.title}
          data={data}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.decks,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch);

const MainConnect = connect(mapStateToProps, mapDispatchToProps)(Main);
export { MainConnect as Main };

