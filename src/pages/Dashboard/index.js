import React from 'react';
import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/AuthContext';

import { Container, Header, HeaderTitle, UserName, ActionContent, TouchableButton } from './styles';

function Dashboard() {
  const { user, signOut } = useAuth();
  const { navigate } = useNavigation();

  let [fontsLoaded] = useFonts({ RobotoSlab_400Regular });

  if(!fontsLoaded) return <></>;
  return (
    <Container>
      <Header>
        <HeaderTitle style={{ fontFamily: 'RobotoSlab_400Regular' }}>
          Bem-vindo, {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>
        <ActionContent>
          <TouchableButton onPress={() => navigate('InsertEditExpense')}>
            <Icon name="edit" size={20} color="#ff9000" />
          </TouchableButton>
          <TouchableButton onPress={signOut}>
            <Icon name="power" size={20} color="#999591" />
          </TouchableButton>
        </ActionContent>
      </Header>
    </Container>
  );
}

export default Dashboard;