import React, { useCallback, useRef } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

function SignUp() {
  const formRef = useRef(null);
  const { goBack } = useNavigation();
  let [fontsLoaded] = useFonts({ RobotoSlab_400Regular });
  
  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

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
              <Input name='name' icon='user' placeholder='Nome' />
              <Input name='email' icon='mail' placeholder='E-mail' />
              <Input name='password' icon='lock' placeholder='Senha' />
            </Form>
            <Button onPress={() => formRef.current?.submitForm()}>Cadastrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <BackToSignIn onPress={() => goBack()}>
        <Icon name='arrow-left' size={20} color='#ff9000' />
        <BackToSignInText style={{ fontFamily: 'RobotoSlab_400Regular' }}>Voltar para login</BackToSignInText>
      </BackToSignIn>
    </>
  );
}

export default SignUp;