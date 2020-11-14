import React, { useState, useCallback } from 'react';
import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import RNPickerSelect from 'react-native-picker-select';

import { Container } from './styles';

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
        style={{ color: '#fff', fontSize: '16px', fontFamily: 'RobotoSlab_400Regular' }}
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