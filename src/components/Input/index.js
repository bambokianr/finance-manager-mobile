import React, { useEffect, useRef } from 'react';
import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { useField } from '@unform/core';

import { Container, Icon, TextInput } from './styles';

function Input({ name, icon, ...rest }) {
  let [fontsLoaded] = useFonts({ RobotoSlab_400Regular });
  
  const inputElementRef = useRef(null);
  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      }
    })
  }, [fieldName, registerField]);

  if(!fontsLoaded) return <></>;
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />
      <TextInput
        ref={inputElementRef}
        style={{ fontFamily: 'RobotoSlab_400Regular' }} 
        placeholderTextColor='#666360'
        defaultValue={defaultValue}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
}

export default Input;