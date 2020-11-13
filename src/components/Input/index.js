import React, { useEffect, useRef, forwardRef, useImperativeHandle, useState, useCallback } from 'react';
import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { useField } from '@unform/core';

import { Container, Icon, TextInput } from './styles';

const Input = forwardRef(({ name, icon, ...rest }, ref) => {
  let [fontsLoaded] = useFonts({ RobotoSlab_400Regular });
  
  const inputElementRef = useRef(null);
  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    }
  }));

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
    <Container isFocused={isFocused}>
      <Icon name={icon} size={20} color={(isFocused || isFilled) ? '#ff9000' : '#666360'} />
      <TextInput
        ref={inputElementRef}
        style={{ fontFamily: 'RobotoSlab_400Regular' }} 
        placeholderTextColor='#666360'
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
})

export default Input;