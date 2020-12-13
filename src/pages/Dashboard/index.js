import React, { useCallback, useEffect } from "react";
import { StatusBar } from "react-native";
import {
  useFonts,
  RobotoSlab_300Light,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
} from "@expo-google-fonts/roboto-slab";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchDayRemindersRequest, fetchAllExpensesRequest } from "../../store/modules/expenses/actions";

import { useAuth } from "../../hooks/AuthContext";
import { formatDate, formatDateFromApi } from "../../utils/formatDate";

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ActionContent,
  TouchableButton,
  Content,
  DashboardText,
  DataDashboard,
  ContainerTitle,
  ContainerTitleText,
  DataDashboardContent,
  NoDataText,
  List,
  ReminderContent,
  HistoricContent,
  ExpenseDescription,
  InfoContainer,
  InfoText,
} from "./styles";

function Dashboard() {
  const { user, token, signOut } = useAuth();

  const { dayReminders, allExpenses } = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  let [fontsLoaded] = useFonts({
    RobotoSlab_300Light,
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
  });

  const handleFetchDayRemindersRequest = useCallback(() => {
    const today = formatDate(new Date());
    dispatch(fetchDayRemindersRequest(token, today));
  }, [dispatch]);

  const handleFetchAllExpensesRequest = useCallback(() => {
    dispatch(fetchAllExpensesRequest(token));
  }, [dispatch]);

  useEffect(() => {
    handleFetchDayRemindersRequest();
    handleFetchAllExpensesRequest();
  }, []);

  if (!fontsLoaded) return <></>;
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderTitle style={{ fontFamily: "RobotoSlab_400Regular" }}>
          Bem-vindo, {"\n"}
          <UserName>{user.name}</UserName>
        </HeaderTitle>
        <ActionContent>
          <TouchableButton onPress={signOut}>
            <Feather name="power" size={20} color="#999591" />
          </TouchableButton>
        </ActionContent>
      </Header>
      <Content>
        <DashboardText style={{ fontFamily: "RobotoSlab_500Medium" }}>
          Dashboard de despesas
        </DashboardText>
        <DataDashboard>
          <ContainerTitle>
            <ContainerTitleText style={{ fontFamily: "RobotoSlab_400Regular" }}>
              Lembretes do dia
            </ContainerTitleText>
          </ContainerTitle>
          <DataDashboardContent>
            {dayReminders.length === 0 && (
              <NoDataText style={{ fontFamily: "RobotoSlab_300Light" }}>
                Você não possui lembretes para hoje!
              </NoDataText>
            )}
            <List
              data={dayReminders}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id_expense.toString()}
              renderItem={({ item }) => (
                <ReminderContent key={item.id_expense}>
                  <ExpenseDescription
                    style={{ fontFamily: "RobotoSlab_400Regular", color: '#3b3e47' }}
                  >
                    {item.description}
                  </ExpenseDescription>
                  <InfoContainer>
                    <Feather name="tag" size={18} color="#fff" />
                    <InfoText style={{ fontFamily: "RobotoSlab_400Regular", color: "#fff" }}>
                      {item.tag}
                    </InfoText>
                  </InfoContainer>
                  <InfoContainer>
                    <FontAwesome name="money" size={18} color="#fff" />
                    <InfoText
                      style={{ fontFamily: "RobotoSlab_400Regular", color: '#fff' }}
                    >{`R$ ${item.value.toFixed(2)}`}</InfoText>
                  </InfoContainer>
                </ReminderContent>
              )}
            />
          </DataDashboardContent>
        </DataDashboard>
        <DataDashboard>
          <ContainerTitle>
            <ContainerTitleText style={{ fontFamily: "RobotoSlab_400Regular" }}>
              Histórico de despesas
            </ContainerTitleText>
          </ContainerTitle>
          <DataDashboardContent>
            {allExpenses.length === 0 && (
              <NoDataText style={{ fontFamily: "RobotoSlab_300Light" }}>
                Você não possui despesas no histórico.
              </NoDataText>
            )}
            <List
              data={allExpenses}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id_expense.toString()}
              renderItem={({ item }) => (
                <HistoricContent key={item.id_expense}>
                  <ExpenseDescription
                    style={{ fontFamily: "RobotoSlab_400Regular" }}
                  >
                    {item.description}
                  </ExpenseDescription>
                  <InfoContainer style={{ marginBottom: 10 }}>
                    <FontAwesome name="calendar" size={18} color="#fff" />
                    <InfoText
                      style={{ fontFamily: "RobotoSlab_400Regular", color: '#fff' }}
                    >{formatDateFromApi(item.date)}</InfoText>
                  </InfoContainer>
                  <InfoContainer>
                    <Feather name="tag" size={18} color="#ABB2C0" />
                    <InfoText style={{ fontFamily: "RobotoSlab_400Regular" }}>
                      {item.tag}
                    </InfoText>
                  </InfoContainer>
                  <InfoContainer>
                    <FontAwesome name="money" size={18} color="#ABB2C0" />
                    <InfoText
                      style={{ fontFamily: "RobotoSlab_400Regular" }}
                    >{`R$ ${item.value.toFixed(2)}`}</InfoText>
                  </InfoContainer>
                </HistoricContent>
              )}
            />
          </DataDashboardContent>
        </DataDashboard>
      </Content>
    </Container>
  );
}

export default Dashboard;
