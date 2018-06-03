import React, { Component } from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DecksActions} from '../../redux/ducks/Decks'

const cardsLogo = require('../../resources/cardslogo.png');

class ModalCreateDeck extends Component {

  render() {
    return (
      <Modal
      animationType="slide"
      transparent={false}
      visible={this.props.createModalVisible}
      onRequestClose={() => this.props.closeModal()}>
      <View style={{marginTop: 22}}>
        <View>
          <Text>Hello World!</Text>

          <TouchableHighlight>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
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

