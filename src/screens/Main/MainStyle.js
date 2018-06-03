import styled from 'styled-components/native';
import { colors } from '../../styles';

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;

const CardItem = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10;
  min-width: 300;
  min-height: 100;
  padding-left: 12;
  margin: 24px;
  background-color: ${colors.lighter};
`;

const CardSubView = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const CardImage = styled.Image`
  width: 60;
  height: 60;
  margin-right: 12;
`;

const CardTitle = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: black;
`;

const CardSubTitle= styled.Text`
  font-size: 14;
  color: ${colors.regular};
`;

export {
  Container,
  CardItem,
  CardImage,
  CardTitle,
  CardSubTitle,
  CardSubView,
}
