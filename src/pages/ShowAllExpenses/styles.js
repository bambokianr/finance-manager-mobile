import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px 24px;
  padding-top: ${getStatusBarHeight() + 20}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleText = styled.Text`
  color: #999591;
  font-size: 18px;
`;

export const TouchableButton = styled.TouchableOpacity`
  padding: 4px;
`;

export const ExpenseList = styled.FlatList``;

export const ExpenseContent = styled.View`
  background-color: #3b3e47;
  padding: 12px 16px;
  border-radius: 10px;
  margin: 12px 8px 0 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ExpenseInfo = styled.View``;

export const ExpenseDescription = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-bottom: 4px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 2px;
`;

export const InfoText = styled.Text`
  padding-left: 8px;
  color: #ff9000;
  font-size: 14px;
`;

export const ActionsContent = styled.View`
  flex-direction: row;
`;

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: ${props => props.caution ? '#FF0202' : '#2EA44E'};
  width: 36px;
  height: 36px;
  border-radius: 4px;
  margin-left: 8px;
`;