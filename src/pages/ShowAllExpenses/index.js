import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, Header, TitleText, TouchableButton, ExpenseList, ExpenseContent, ExpenseInfo, ExpenseDescription, InfoContainer, InfoText, ActionsContent, Button } from './styles';

function ShowAllExpenses({ route }) {
  const { data } = route.params;
  const { goBack } = useNavigation();

  let [fontsLoaded] = useFonts({ RobotoSlab_400Regular });

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
        keyExtractor={item => item.id_expense}
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
              <Button>
                <Feather name="edit-3" size={18} color="#fff" />
              </Button>
              <Button caution={true}>
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