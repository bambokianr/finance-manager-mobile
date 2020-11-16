import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';

import { Container, Header, TitleText, TouchableButton, ExpenseList, ExpenseContent, ExpenseInfo, ExpenseDescription, InfoContainer, InfoText, ActionsContent, Button } from './styles';

function ShowAllExpenses({ route }) {
  let [fontsLoaded] = useFonts({ RobotoSlab_400Regular });
  const { data, tagsToSelect } = route.params;
  const { goBack, navigate } = useNavigation();
  const { token } = useAuth();

  async function deleteExpense(id_expense) {
    // const path = `/expense/${token}/${id_expense}`;
    // await api.delete(path, { token, id_expense })
    //   .then(res => console.log('[RES - deleteExpense]', res))
    //   .catch(err => console.log('[ERR - deleteExpense]', err));
    // update();
  };

  if(!fontsLoaded) return <></>;
  return (
    <Container>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
      <Header>
        <TitleText style={{ fontFamily: 'RobotoSlab_400Regular' }}>Todas as despesas salvas</TitleText>
        <TouchableButton onPress={goBack}>
          <MaterialIcons name="close" size={24} color="#999591" />
        </TouchableButton>
      </Header>
      <ExpenseList 
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id_expense.toString()}
        renderItem={({ item }) => (
          <ExpenseContent key={item.id_expense}>
            <ExpenseInfo>
              <ExpenseDescription style={{ fontFamily: 'RobotoSlab_400Regular' }}>{item.description}</ExpenseDescription>
              <InfoContainer>
                <Feather name="tag" size={18} color="#ff9000" />
                <InfoText style={{ fontFamily: 'RobotoSlab_400Regular' }}>{item.tag}</InfoText>
              </InfoContainer>
              <InfoContainer>
                <FontAwesome name="money" size={18} color="#ff9000" />
                <InfoText style={{ fontFamily: 'RobotoSlab_400Regular' }}>{`R$ ${item.value.toFixed(2)}`}</InfoText>
              </InfoContainer>
            </ExpenseInfo>
            <ActionsContent>
              <Button onPress={() => navigate('InsertEditExpense', { expenseToEdit: item, isEdit: true, tagsToSelect })}>
                <Feather name="edit-3" size={18} color="#fff" />
              </Button>
              <Button caution={true} onPress={() => deleteExpense(item.id_expense)}>
                <Feather name="trash-2" size={18} color="#fff" />
              </Button>
            </ActionsContent>
          </ExpenseContent>
        )}
      />
    </Container>
  )
}

export default ShowAllExpenses;