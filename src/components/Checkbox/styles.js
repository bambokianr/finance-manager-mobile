import styled from 'styled-components/native';

export const Touchable = styled.TouchableWithoutFeedback``;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
`;

export const CheckboxContainer = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${props => !!props.isChecked ? '#ff9000' : 'transparent'};
  border-width: 2px;
  border-color: #ff9000;  
`;

export const LabelText = styled.Text`
  margin-left: 8px;
  color: #ABB2C0;
  font-size: 15px;
`;