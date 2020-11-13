import React, { useState, useCallback, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useFonts, RobotoSlab_300Light, RobotoSlab_400Regular, RobotoSlab_500Medium } from '@expo-google-fonts/roboto-slab';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/AuthContext';
import { formatDate } from '../../utils/formatDate';
import api from '../../services/api';

import { Container, Header, HeaderTitle, UserName, ActionContent, TouchableButton, Content, DashboardText, DataDashboard, ContainerTitle, ContainerTitleText, DataDashboardContent, NoDataText, ReminderList, ReminderContent, ReminderDescription, InfoContainer, InfoText } from './styles';

function Dashboard() {
  const { user, token, signOut } = useAuth();
  const { navigate } = useNavigation();
  const [dayRemindersData, setDayRemindersData] = useState([]);
  const [allExpenses, setAllExpenses] = useState([]);
  const [tags, setTags] = useState([]);
  const [expensesChartData, setExpensesChartData] = useState([]);

  let [fontsLoaded] = useFonts({ RobotoSlab_300Light, RobotoSlab_400Regular, RobotoSlab_500Medium });

  const getDayExpenses = useCallback(async () => {
    const today = formatDate(new Date());
    await api.get(`/expense?token=${token}&reminderCreated=${today}`)
      .then(res => {
        console.log('[RES - getDayExpenses]', res);
        setDayRemindersData(res.data);
      })
      .catch(err => console.log('[ERR - getDayExpenses]', err));
  }, [token]);

  const getAllExpenses = useCallback(async () => {
    await api.get(`/expense?token=${token}`)
    .then(res => {
      console.log('[RES - getAllExpenses]', res);
      setAllExpenses(res.data);
    })
    .catch(err => console.log('[ERR - getAllExpenses]', err));
  }, [token]);

  const getTags = useCallback(async () => {
    await api.get(`/tag?token=${token}`)
    .then(res => {
      console.log('[RES - getTags]', res);
      setTags(res.data);
    })
    .catch(err => console.log('[ERR - getTags]', err));
  }, [token]);

  const getExpensesChartData = useCallback(async () => {
    await api.get(`/expensestochart?token=${token}`)
      .then(res => {
        console.log('[RES - getExpensesChartData]', res);
        setExpensesChartData(res.data);
      })
      .catch(err => console.log('[ERR - getExpensesChartData]', err));
  }, [token]);

  useEffect(() => {
    getDayExpenses();
    getAllExpenses();
    getTags();
    getExpensesChartData();
  }, [getDayExpenses, getAllExpenses]);

  //! UPDATE DATA

  if(!fontsLoaded) return <></>;
  return (
    <Container>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <Header>
        <HeaderTitle style={{ fontFamily: 'RobotoSlab_400Regular' }}>
          Bem-vindo, {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>
        <ActionContent>
          <TouchableButton onPress={() => navigate('InsertEditExpense')}>
            <Feather name="edit" size={20} color="#ff9000" />
          </TouchableButton>
          <TouchableButton onPress={signOut}>
            <Feather name="power" size={20} color="#999591" />
          </TouchableButton>
        </ActionContent>
      </Header>
      <Content>
        <DashboardText style={{ fontFamily: 'RobotoSlab_500Medium' }}>Dashboard de despesas</DashboardText>
        <DataDashboard>
          <ContainerTitle>
            <ContainerTitleText style={{ fontFamily: 'RobotoSlab_400Regular' }}>Lembretes do dia</ContainerTitleText>
            <TouchableButton onPress={() => {}}>
              <Feather name="calendar" size={18} color="#ff9000" />
            </TouchableButton>
          </ContainerTitle>
          <DataDashboardContent>
            {dayRemindersData.length === 0 &&<NoDataText style={{ fontFamily: 'RobotoSlab_300Light' }}>Você não possui lembretes para hoje!</NoDataText>}
            <ReminderList 
              data={dayRemindersData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <ReminderContent key={item.id_expense}>
                  <ReminderDescription style={{ fontFamily: 'RobotoSlab_400Regular' }}>{item.description}</ReminderDescription>
                  <InfoContainer>
                    <Feather name="tag" size={18} color="#ABB2C0" />
                    <InfoText style={{ fontFamily: 'RobotoSlab_400Regular' }}>{item.tag}</InfoText>
                  </InfoContainer>
                  <InfoContainer>
                  <FontAwesome name="money" size={18} color="#ABB2C0" />
                    <InfoText style={{ fontFamily: 'RobotoSlab_400Regular' }}>{`R$ ${item.value.toFixed(2)}`}</InfoText>
                  </InfoContainer>
                </ReminderContent>
              )}
            />
          </DataDashboardContent>
        </DataDashboard>
        <DataDashboard>
          <ContainerTitle>
            <ContainerTitleText style={{ fontFamily: 'RobotoSlab_400Regular' }}>Overview semanal</ContainerTitleText>
            <TouchableButton onPress={() => {}}>
              <Feather name="plus-square" size={18} color="#ff9000" />
            </TouchableButton>
          </ContainerTitle>
          <DataDashboardContent>
            {expensesChartData.length === 0 && <NoDataText style={{ fontFamily: 'RobotoSlab_300Light' }}>Não existem dados suficientes para gerar o gráfico de despesas.</NoDataText>}
          </DataDashboardContent>
        </DataDashboard>
      </Content>
    </Container>
  );
}

export default Dashboard;