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
  font-size: 16px;
  line-height: 24px;
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

export const Content = styled.View`
  padding: 28px 24px;
`;

export const DashboardText = styled.Text`
  color: #ABB2C0;
  font-size: 24px;
`;

export const DataDashboard = styled.View`
  padding: 24px 0px 8px;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerTitleText = styled.Text`
  color: #999591;
  font-size: 18px;
`;

export const DataDashboardContent = styled.View``;

export const NoDataText = styled.Text`
  color: #28262e;
`;

export const ReminderList = styled.FlatList``;

export const ReminderContent = styled.View`
  background-color: #3b3e47;
  width: 240px;
  padding: 16px 24px;
  border-radius: 10px;
  margin: 12px 8px 0 0;
`;

export const ReminderDescription = styled.Text`
  color: #ff9000;
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
  color: #ABB2C0;
  font-size: 14px;
`;