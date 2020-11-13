import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 20px 24px;
  padding-top: ${getStatusBarHeight() + 20}px;
  background-color: #28262e;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 18px;
  line-height: 26px;
`;

export const UserName = styled.Text`
  color: #ff9000;
`;

export const ActionContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: -10px;
`;

export const TouchableButton = styled.TouchableOpacity`
  padding: 10px;
`;