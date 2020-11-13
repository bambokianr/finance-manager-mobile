import React from 'react';
import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';


import { Container, Icon, TextInput } from './styles';

function Input({ name, icon, ...rest }) {
  let [fontsLoaded] = useFonts({ RobotoSlab_400Regular });
  
  if(!fontsLoaded) return <></>;
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />
      <TextInput
        style={{ fontFamily: 'RobotoSlab_400Regular' }} 
        placeholderTextColor='#666360'
        {...rest}
      />
    </Container>
  );
}

export default Input;