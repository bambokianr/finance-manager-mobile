import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: 20px 24px;
  padding-top: ${getStatusBarHeight() + 20}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const TitleText = styled.Text`
  color: #999591;
  font-size: 18px;
`;

export const TouchableButton = styled.TouchableOpacity`
  padding: 4px 0;
`;

export const ContainerInputWithIcon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;