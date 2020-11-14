import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StatusBar } from 'react-native';
import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

import { Container, Header, TitleText, TouchableButton, ContainerInputWithIcon } from './styles';

const mockTags = [
  { label: 'Football', value: 'football' },
  { label: 'Baseball', value: 'baseball' },
  { label: 'Hockey', value: 'hockey' },
];

function InsertEditExpense() {
  const [createNewTag, setCreateNewTag] = useState(false);
  const [tags, setTags] = useState(mockTags);
  const [selectedOptionValue, setSelectedOptionValue] = useState(null);
  const formRef = useRef(null);
  const descriptionInputRef = useRef(null);
  const dateInputRef = useRef(null);
  const valueInputRef = useRef(null);
  const { goBack } = useNavigation();

  let [fontsLoaded] = useFonts({ RobotoSlab_400Regular });

  const onChangeOption = useCallback((optionValue) => {
    setSelectedOptionValue(optionValue);
  }, []);

  const handleInputFocus = useCallback((inputRef) => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = useCallback(async data => {
    console.log('FOI!');
  }, []);

  if(!fontsLoaded) return <></>;
  return (
    <Container>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
      <Header>
        <TitleText style={{ fontFamily: 'RobotoSlab_400Regular' }}>Insira sua despesa</TitleText>
        <TouchableButton onPress={goBack}>
          <MaterialIcons name='close' size={24} color='#999591' />
        </TouchableButton>
      </Header>
      <Form ref={formRef} onSubmit={handleSubmit}>
        {!createNewTag ? 
          <ContainerInputWithIcon>
            <Select 
              dataOptions={tags}
              onChangeOption={onChangeOption}
              selectedOptionValue={selectedOptionValue}
              onDonePress={() => handleInputFocus(descriptionInputRef)}
            />
            <TouchableButton style={{ marginBottom: 6 }} onPress={() => setCreateNewTag(true)}>
              <MaterialIcons name='add-circle-outline' size={26} color='#000' />
            </TouchableButton>
          </ContainerInputWithIcon>    
          :
          <ContainerInputWithIcon>
            <Input
              smaller={true}
              name='tag' 
              placeholder='Nova tag'
              autoCapitalize='none'
              returnKeyType='next'
              onSubmitEditing={() => handleInputFocus(descriptionInputRef)}
            />
            <TouchableButton style={{ marginBottom: 6 }} onPress={() => setCreateNewTag(false)}>
              <MaterialIcons name='remove-circle-outline' size={26} color='#000' />
            </TouchableButton>
          </ContainerInputWithIcon>    
        }
        <Input 
          ref={descriptionInputRef}
          name='description' 
          placeholder='Descrição'
          autoCapitalize='none'
          returnKeyType='next'
          onSubmitEditing={() => dateInputRef.current?.focus()}
        />
        <Input 
          ref={dateInputRef}
          name='date' 
          type='date'
          returnKeyType='next'
          onSubmitEditing={() => valueInputRef.current?.focus()}
        />
        <Input 
          ref={valueInputRef}
          name='value' 
          placeholder='Valor: 0.00'
        />
      </Form>
      <Button onPress={() => formRef.current?.submitForm()}>Inserir</Button>
    </Container>
  );
}

export default InsertEditExpense;