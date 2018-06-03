import React, { Component } from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DecksActions} from '../../redux/ducks/Decks'

const cardsLogo = require('../../resources/cardslogo.png');

class ModalCreateDeck extends Component {

  render() {
    const { data } = this.props.decks;
    return (
      <Modal
      animationType="slide"
      transparent={false}
      visible={this.props.modalVisible}
      onRequestClose={() => {
        alert('Modal has been closed.');
      }}>
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
  decks: state.decks,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch);

const ModalCreateDeckConnect = connect(mapStateToProps, mapDispatchToProps)(ModalCreateDeck);
export { ModalCreateDeckConnect as ModalCreateDeck };

