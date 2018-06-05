import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
    headerRight: <HeaderIcon/>

  };

  async componentDidMount(){
    await this.props.getDecksRequest()
  }

  async componentWillReceiveProps(nextProps){

    const currentDataSize = this.props.decks.data.length;
    const nextDataSize = nextProps.decks.data.length;


    if(currentDataSize > 0 && nextDataSize > currentDataSize){
      const { data } = nextProps.decks;

      await this.props.selectDeckRequest(data[(nextDataSize - 1)]);
      this.props.navigation.navigate('Deck')
    }
  }

  handleDeckPress = (item) => {
    this.props.selectDeckRequest(item);
    this.props.navigation.navigate('Deck')
  }

  renderItem = ({item}) => {
    return(
      <CardItem onPress={()=> this.handleDeckPress(item)}>
        <CardImage source={cardsLogo}/>
        <CardSubView>
          <CardTitle onPress={()=> this.handleDeckPress(item)}>{item.title}</CardTitle>
          <CardSubTitle>{item.questions.length} card(s)</CardSubTitle>
        </CardSubView>
      </CardItem>
    )
  }

  render() {
    const { data } = this.props.decks;
    return (
      <Container>
        <ModalCreateDeck />
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

