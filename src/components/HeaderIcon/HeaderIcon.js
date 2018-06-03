import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MaterialIcons } from '@expo/vector-icons'

import { Creators as DecksActions} from '../../redux/ducks/Decks'
import { IconContainer } from './HeaderIconStyle';
import { colors } from '../../styles';


class HeaderIcon extends Component {
  render() {
    return (
      <IconContainer>
        <MaterialIcons name="library-add" size={20} color={colors.secundary}/>
      </IconContainer>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.decks,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch);

const HeaderIconConnect = connect(mapStateToProps, mapDispatchToProps)(HeaderIcon);
export { HeaderIconConnect as HeaderIcon };


