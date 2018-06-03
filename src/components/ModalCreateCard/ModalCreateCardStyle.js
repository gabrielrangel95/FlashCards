import styled from 'styled-components/native';
import { colors } from '../../styles';

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.darkTransparent};
`;

const SubContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.white};
  min-height: 300;
  min-width: 340;
  border-radius: 8;
  padding: 12px;
`;


const IconView = styled.TouchableOpacity`
  align-self: flex-start;
  padding-right: 8;
`;

const CreateTitle = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: black
  margin-vertical: 12;
`;

const TitleInput = styled.TextInput`
  margin-bottom: 24;
  font-size: 20;
  color: ${colors.regular};
  border-bottom-color: ${colors.regular};
  width: 300;
  border-bottom-width: 1;
`;

const ButtonView = styled.View`
  width: 300;
`;


export { Container, SubContainer, IconView, CreateTitle, TitleInput, ButtonView };
