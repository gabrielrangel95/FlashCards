import styled from 'styled-components/native';
import { colors } from '../../styles';

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;

const DeckCard = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.lighter};
  min-height: 480;
  min-width: 320;
  border-radius: 8;
  padding: 12px;
`;

const DeckImage = styled.Image`
   width: 146;
   height: 146;
   margin-bottom: 24;
`;

const DeckTitle = styled.Text`
  font-size: 38;
  color: black;
  font-weight: bold;
`;

const DeckSubTitle = styled.Text`
  font-size: 34;
  color: ${colors.regular};
  font-style: italic;
`;

const ButtonView = styled.View`
  width: 220;
  margin-top: 24;
`;

export { Container, DeckCard, DeckImage, DeckTitle, DeckSubTitle, ButtonView }
