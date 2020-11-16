import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Touchable = styled.TouchableWithoutFeedback``;

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background-color: #232129;
  border-width: 2px;
  border-color: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${props => props.isErrored && css`
    border-color: #c53030;
  `}
  
  ${props => props.isFocused && css`
    border-color: #ff9000;
  `};
`;

export const TextInput = styled.TextInput`
  color: ${props => props.notFilled ? '#666360' : '#fff'};
  font-size: 16px;
`;

export const SelectButton = styled(RectButton)`
  height: 48px;
  width: 200px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #232129;
  margin: 8px auto 16px;
  justify-content: center;
  align-items: center;
`;

export const SelectButtonText = styled.Text`
  color: #312e38;
  font-size: 15px;
`;