import React from 'react'
import { ActivityIndicator } from 'react-native'
import { ButtonContainer, ButtonText} from './ButtonStyle'
import { colors } from '../../styles';

const defaultTheme = {
    backgroundColor: colors.secundary,
    textColor: colors.white
  };

const secondaryTheme = {
    backgroundColor: colors.black,
    textColor: colors.secundary
}

const Button = (props) =>{
    const theme = props.secondary ? secondaryTheme : defaultTheme;
    return(
        <ButtonContainer theme={theme} {...props}>
        {
          props.loading ?
            <ActivityIndicator color={theme.textColor} size={1}/>
            :  <ButtonText theme={theme}>{props.text}</ButtonText>
        }
        </ButtonContainer>
    )

}

export { Button }
