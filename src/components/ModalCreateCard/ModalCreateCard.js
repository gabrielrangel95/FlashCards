import React, { Component } from 'react';
import { Modal, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CardsActions } from '../../redux/ducks/Cards'
import { Container, SubContainer, IconView, CreateTitle, TitleInput, ButtonView } from './ModalCreateCardStyle.js';
import { Button } from '../';
import { FontAwesome } from '@expo/vector-icons'
import { colors } from '../../styles';

const cardsLogo = require('../../resources/cardslogo.png');

class ModalCreateCard extends Component {

  state = {
    question: '',
    answer: '',
    loading: false,
  }



  handleCreatePress = async () => {
    const { question, answer } = this.state;
    if(question.length < 1 || answer.length < 1  ){
      Alert.alert('Question and Answer are required!');
    }else{
      this.setState({ loading: true})
      const response = await this.props.addCardRequest(
        {
          question: question,
          answer: answer
        },
        this.props.selected.id
      );
      if(response.error){
        Alert.alert('Error!');
      }else{
        this.setState({ loading: false})
        this.props.closeCardsModal()
      }
    }
  }

  render() {
    const { createCardModalVisible } = this.props

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={createCardModalVisible}
        onRequestClose={() => this.props.closeCardsModal()}>
        <Container>
          <SubContainer>
            <IconView onPress={() => this.props.closeCardsModal()}>
              <FontAwesome name="window-close-o" size={24} color={colors.secundary} />
            </IconView>
            <CreateTitle>Create new Card: </CreateTitle>
            <TitleInput
              placeholder="Question"
              onChangeText={(text)=> this.setState({ question: text})}
              value={this.state.question}
            />
             <TitleInput
              placeholder="Answer"
              onChangeText={(text)=> this.setState({ answer: text})}
              value={this.state.answer}
            />
            <ButtonView>
              <Button text="Create" loading={this.state.loading} onPress={()=>this.handleCreatePress()} />
            </ButtonView>
          </SubContainer>
        </Container>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  createCardModalVisible: state.cards.createCardModalVisible,
  selected: state.decks.selected,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CardsActions, dispatch);

const ModalCreateCardConnect = connect(mapStateToProps, mapDispatchToProps)(ModalCreateCard);
export { ModalCreateCardConnect as ModalCreateCard };

