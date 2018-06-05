import React, { Component } from 'react';
import { Modal, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DecksActions } from '../../redux/ducks/Decks'
import { Container, SubContainer, IconView, CreateTitle, TitleInput, ButtonView } from './ModalCreateDeckStyle';
import { Button } from '../';
import { FontAwesome } from '@expo/vector-icons'
import { colors } from '../../styles';

const cardsLogo = require('../../resources/cardslogo.png');

class ModalCreateDeck extends Component {

  state = {
    title: '',
    loading: false,
  }


  handleCreatePress = async () => {
    const { title } = this.state;
    if(title.length < 1){
      Alert.alert('Title is required!');
    }else{
      this.setState({ loading: true})
      const response = await this.props.createDeckRequest(title);
      if(response.error){
        Alert.alert('Error!');
      }else{
        this.setState({ loading: false, title: ''})
        this.props.closeModal();
      }
    }
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.createModalVisible}
        onRequestClose={() => this.props.closeModal()}>
        <Container>
          <SubContainer>
            <IconView onPress={() => this.props.closeModal()}>
              <FontAwesome name="window-close-o" size={24} color={colors.secundary} />
            </IconView>
            <CreateTitle>What is the title of your new deck ?</CreateTitle>
            <TitleInput
              placeholder="Title"
              onChangeText={(text)=> this.setState({ title: text})}
              value={this.state.title}
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
  createModalVisible: state.decks.createModalVisible,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch);

const ModalCreateDeckConnect = connect(mapStateToProps, mapDispatchToProps)(ModalCreateDeck);
export { ModalCreateDeckConnect as ModalCreateDeck };

