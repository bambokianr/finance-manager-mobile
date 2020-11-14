import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';

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
  const [addRemember, setAddRemember] = useState(false);
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
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        description: Yup.string().required('Descrição obrigatória'),
        date: Yup.string().required('Data obrigatória'),
        value: Yup.string().required('Valor obrigatório'),
      });
      
      // !!isEdit ? editExpense(data) : createExpense(data);
      console.log('DATA', data);
      await schema.validate(data, { abortEarly: false });
    } catch(err) {
      const errors = err && getValidationErrors(err);
      formRef.current.setErrors(errors);
    }

    // if (data.addRemember) {
    //   InsertEvent(data.value, data.description, data.reminderDate);
    // }
  // }, [createExpense, editExpense, isEdit]);
  }, []);

  if(!fontsLoaded) return <></>;
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView 
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={{ flex: 1 }}
      >
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
              returnKeyType='next'
              onSubmitEditing={() => valueInputRef.current?.focus()}
            />
            <Input 
              ref={valueInputRef}
              name='value' 
              placeholder='Valor: 0.00'
              keyboardType='numeric'
            />
            <Checkbox 
              name='addRemember' 
              label='Adicionar lembrete' 
              isChecked={addRemember}
              setIsChecked={() => setAddRemember(!addRemember)}
            />
          </Form>
          <Button onPress={() => formRef.current?.submitForm()}>Inserir</Button>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default InsertEditExpense;