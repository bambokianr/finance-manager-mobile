import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { Container, TitleText, ExpenseList, ExpenseContent, ExpenseInfo, ExpenseDescription, InfoContainer, InfoText, ActionsContent, Button } from './styles';

function ShowAllExpenses({ route }) {
  const { data } = route.params;

  let [fontsLoaded] = useFonts({ RobotoSlab_400Regular });

  if(!fontsLoaded) return <></>;
  return (
    <Container>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
      <TitleText style={{ fontFamily: 'RobotoSlab_400Regular' }}>Todas as despesas salvas</TitleText>
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