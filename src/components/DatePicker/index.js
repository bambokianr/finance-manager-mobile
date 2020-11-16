import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { useField } from '@unform/core';
import { Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import { formatDatePickerValue, formatDateFromApi } from '../../utils/formatDate';

import { Touchable, Container, TextInput, SelectButton, SelectButtonText } from './styles';

function DatePicker({ name, defaultDate, ...rest }) {
  let [fontsLoaded] = useFonts({ RobotoSlab_400Regular });

  const datePickerElementRef = useRef(null);
  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const datePickerValueRef = useRef({ value: defaultValue });

  const [savedDate, setSavedDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notFilled, setNotFilled] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datePickerValueRef.current,
      path: 'value',
      setValue(ref, value) {
        datePickerValueRef.current.value = value;
        datePickerElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        datePickerValueRef.current.value = '';
        datePickerElementRef.current.clear();
      }
    })
  }, [fieldName, registerField]);

  useEffect(() => {
    if(savedDate !== null || defaultDate) setNotFilled(false)
    else setNotFilled(true);
  }, [savedDate]);

  const onChangeDate = useCallback((event, date) => {
    const currentDate = date || selectedDate;
    setSelectedDate(currentDate);
  }, []);

  const onSaveDate = useCallback(() => {
    setSavedDate(formatDatePickerValue(selectedDate));
    setIsFocused(false);
  }, [selectedDate]);

  useEffect(() => {
    datePickerValueRef.current.value = savedDate;
  }, [savedDate]);

  if(!fontsLoaded) return <></>;
  return (
    <>
      <Touchable onPress={() => setIsFocused(!isFocused)}>
        <Container isFocused={isFocused} isErrored={!!error} {...rest}>
          <TextInput
            ref={datePickerElementRef}
            style={{ fontFamily: 'RobotoSlab_400Regular' }} 
            notFilled={notFilled}
            placeholderTextColor='#666360'
            defaultValue={defaultDate ? formatDateFromApi(defaultDate) : 'dd/mm/aaaa'}
            value={savedDate}
          />
          <Feather name="calendar" size={20} color={isFocused ? '#ff9000' : notFilled ? '#666360' : '#fff'} />
        </Container>
      </Touchable>
      {!!isFocused &&
        <>
          <DateTimePicker
            value={selectedDate}
            style={{ height: 120 }}
            mode='date'
            locale='pt-BR'
            display={Platform.OS === 'android' ? 'calendar' : 'spinner'}
            textColor='#666360'
            onChange={onChangeDate}
          />
          <SelectButton onPress={onSaveDate}>
            <SelectButtonText style={{ fontFamily: 'RobotoSlab_400Regular' }}>Selecionar essa data</SelectButtonText>
          </SelectButton>
        </>
      }
    </>
  );
}

export default DatePicker;