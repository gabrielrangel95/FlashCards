import styled from 'styled-components/native';
import { colors } from '../../styles';

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;

const TextProgress = styled.Text`
  font-size: 28;
  font-weight: 900;
  color: black;
  margin-bottom: 32;
`;

const QuizCard = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.lighter};
  min-height: 360;
  min-width: 320;
  border-radius: 8;
  padding: 12px;
  padding-top: 42px;
`;

const TextQuestion = styled.Text`
  font-size: 28;
  font-weight: 400;
  color: ${colors.regular};
  margin-bottom: 12;
  font-style: italic
`;

const TextShowAnswer = styled.Text`
  font-size: 22;
  font-weight: bold;
  color: ${colors.secundary};
  margin-vertical: 36;
`;

const ViewAnswerButtons = styled.View`
  display: flex;
  flex-direction: row;
  height: 120;
  width: 320;
  justify-content: space-between;
  margin-vertical: 42;
  padding-horizontal: 24px;
`;

const AnswerButtons = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80;
  height: 80;
  border-radius: 40;
  background-color: ${colors.dark};
`;

const TextScore = styled.Text`
  font-size: 56;
  font-weight: 900;
  color: ${colors.secundary};
  margin-top: 32;
`;

const TextAswer = styled.Text`
  font-size: 42;
  font-weight: 900;
  color: ${colors.success};
`;

const FinishButtonView = styled.View`
  width: 240;
  margin-top: 36;
`;

export { Container, QuizCard, TextProgress, TextQuestion, ViewAnswerButtons, AnswerButtons, TextShowAnswer, TextScore, TextAswer, FinishButtonView };
