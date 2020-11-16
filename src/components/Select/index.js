import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import RNPickerSelect from 'react-native-picker-select';
import { useField } from '@unform/core';

import { Container } from './styles';

const pickerStyle = {
  inputIOS: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'RobotoSlab_400Regular'
  },
  inputAndroid: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'RobotoSlab_400Regular'
  },
  placeholder: {
    color: '#666360'
  }
};

function Select({ name, nullValue, dataOptions, onChangeOption = () => {}, onDonePress = () => {} }) {
  let [fontsLoaded] = useFonts({ RobotoSlab_400Regular });
  const selectRef = useRef(null);
  const placeholder = { label: nullValue || 'Selecionar tag', value: null };
  const [isFocused, setIsFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const { registerField, fieldName, error } = useField(name);

  const handleSelectFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleSelectBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleChangeOption = useCallback((value) => {
    onChangeOption(value);
    setSelectedValue(value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    })
  }, [fieldName, registerField]);

  useEffect(() => {
    if(selectedValue !== null) 
      selectRef.current.value = selectedValue;
  }, [selectedValue]);

  if(!fontsLoaded) return <></>;
  return (
    <Container isFocused={isFocused} isErrored={!!error}>
      <RNPickerSelect
        ref={selectRef}
        style={pickerStyle}
        placeholder={placeholder}
        onOpen={handleSelectFocus}
        onClose={handleSelectBlur}
        onValueChange={value => handleChangeOption(value)}
        onDonePress={onDonePress}
        doneText='Selecionar'
        items={dataOptions}
      />
    </Container>
  );
}

export default Select;