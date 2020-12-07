import React, { useState, useCallback, useEffect } from "react";
import { StatusBar } from "react-native";
import {
  useFonts,
  RobotoSlab_300Light,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
} from "@expo-google-fonts/roboto-slab";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDayRemindersRequest,
  fetchAllExpensesRequest,
  fetchTagsRequest,
  fetchExpensesToChartRequest,
} from "../../store/modules/expenses/actions";

import { useAuth } from "../../hooks/AuthContext";
import { formatDate } from "../../utils/formatDate";

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
  ReminderList,
  ReminderContent,
  ReminderDescription,
  InfoContainer,
  InfoText,
} from "./styles";

function Dashboard() {
  const { user, token, signOut } = useAuth();
  const { navigate } = useNavigation();

  const { dayReminders, allExpenses, tags, expensesToChart } = useSelector(
    (state) => state.expenses
  );

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

  const handleFetchTagsRequest = useCallback(() => {
    dispatch(fetchTagsRequest(token));
  }, [dispatch]);

  const handleFetchExpensesToChartRequest = useCallback(() => {
    dispatch(fetchExpensesToChartRequest(token));
  }, [dispatch]);

  useEffect(() => {
    handleFetchDayRemindersRequest();
    handleFetchAllExpensesRequest();
    handleFetchTagsRequest();
    handleFetchExpensesToChartRequest();
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
          <TouchableButton
            onPress={() =>
              navigate("InsertEditExpense", { tagsToSelect: tags })
            }
          >
            <Feather name="edit" size={20} color="#ff9000" />
          </TouchableButton>
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
            <TouchableButton onPress={() => {}}>
              <Feather name="calendar" size={18} color="#ff9000" />
            </TouchableButton>
          </ContainerTitle>
          <DataDashboardContent>
            {dayReminders.length === 0 && (
              <NoDataText style={{ fontFamily: "RobotoSlab_300Light" }}>
                Você não possui lembretes para hoje!
              </NoDataText>
            )}
            <ReminderList
              data={dayReminders}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id_expense.toString()}
              renderItem={({ item }) => (
                <ReminderContent key={item.id_expense}>
                  <ReminderDescription
                    style={{ fontFamily: "RobotoSlab_400Regular" }}
                  >
                    {item.description}
                  </ReminderDescription>
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
                </ReminderContent>
              )}
            />
          </DataDashboardContent>
        </DataDashboard>
        <DataDashboard>
          <ContainerTitle>
            <ContainerTitleText style={{ fontFamily: "RobotoSlab_400Regular" }}>
              Overview semanal
            </ContainerTitleText>
            <TouchableButton
              onPress={() =>
                navigate("ShowAllExpenses", {
                  data: allExpenses,
                  tagsToSelect: tags,
                })
              }
            >
              <Feather name="plus-square" size={18} color="#ff9000" />
            </TouchableButton>
          </ContainerTitle>
          <DataDashboardContent>
            {expensesToChart.length === 0 && (
              <NoDataText style={{ fontFamily: "RobotoSlab_300Light" }}>
                Não existem dados suficientes para gerar o gráfico de despesas.
              </NoDataText>
            )}
          </DataDashboardContent>
        </DataDashboard>
      </Content>
    </Container>
  );
}

export default Dashboard;
