import React, { useState, useCallback } from 'react';
import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import RNPickerSelect from 'react-native-picker-select';

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
  const placeholder = { label: nullValue || 'Selecionar tag', value: null };
  const [isFocused, setIsFocused] = useState(false);
  let [fontsLoaded] = useFonts({ RobotoSlab_400Regular });

  const handleSelectFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleSelectBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  if(!fontsLoaded) return <></>;
  return (
    <Container isFocused={isFocused}>
      <RNPickerSelect
        style={pickerStyle}
        placeholder={placeholder}
        onOpen={handleSelectFocus}
        onClose={handleSelectBlur}
        onValueChange={value => onChangeOption(value)}
        onDonePress={onDonePress}
        doneText='Selecionar'
        items={dataOptions}
      />
    </Container>
  );
}

export default Select;