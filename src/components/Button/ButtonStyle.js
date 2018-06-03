import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  background-color: ${props => props.theme.backgroundColor};
  align-items: center;
  justify-content: center;
  height: 40;
`

const ButtonText = styled.Text`
  color: ${props => props.theme.textColor};
  font-weight: 800;
  font-size: 16
`


export {
    ButtonContainer,
    ButtonText
}
