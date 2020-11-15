import React, { useCallback, useRef } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/AuthContext';

import { Container, Title, CreateAccount, CreateAccountText } from './styles';

function SignIn() {
  const formRef = useRef(null);
  const passwordInputRef = useRef(null);
  const { navigate } = useNavigation();
  const { signIn } = useAuth();

  let [fontsLoaded] = useFonts({ RobotoSlab_400Regular });
  
  const handleSubmit = useCallback(async data => {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });
      await schema.validate(data, { abortEarly: false });

      console.log('[LOGIN]', data);

      await signIn({
        email: data.email,
        password: data.password,
      });
    } catch(err) {
      const errors = getValidationErrors(err);
      formRef.current.setErrors(errors);
      return;
    }
  }, [signIn]);

  if(!fontsLoaded) return <></>;
  return (
    <>
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
            <View><Title style={{ fontFamily: 'RobotoSlab_400Regular' }}>Faça seu login</Title></View>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input 
                name='email' 
                icon='mail' 
                placeholder='E-mail'
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='email-address'
                returnKeyType='next'
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />
              <Input 
                ref={passwordInputRef}
                name='password' 
                icon='lock' 
                placeholder='Senha' 
                secureTextEntry
                returnKeyType='send'
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
            </Form>
            <Button onPress={() => formRef.current?.submitForm()}>Entrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccount onPress={() => navigate('SignUp')}>
        <Icon name='log-in' size={20} color='#ff9000' />
        <CreateAccountText style={{ fontFamily: 'RobotoSlab_400Regular' }}>Criar conta</CreateAccountText>
      </CreateAccount>
    </>
  );
}

export default SignIn;