import React, { useEffect, useState, useCallback } from 'react';
import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import { formatDatePickerValue } from '../../utils/formatDate';

import { Touchable, Container, TextInput, SelectButton, SelectButtonText } from './styles';

function DatePicker({ name, ...rest }) {
  let [fontsLoaded] = useFonts({ RobotoSlab_400Regular });
  const [savedData, setSavedData] = useState('dd/mm/aaaa');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notFilled, setNotFilled] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if(savedData === 'dd/mm/aaaa') setNotFilled(true);
    else setNotFilled(false);
  }, [savedData]);

  const onChangeDate = useCallback((event, date) => {
    const currentDate = date || selectedDate;
    setSelectedDate(currentDate);
  }, []);

  const onSaveDate = useCallback(() => {
    setSavedData(formatDatePickerValue(selectedDate));
    setIsFocused(false);
  }, [selectedDate]);

  if(!fontsLoaded) return <></>;
  return (
    <>
      <Touchable onPress={() => setIsFocused(!isFocused)}>
        <Container isFocused={isFocused} {...rest}>
          <TextInput 
            notFilled={notFilled}
            style={{ fontFamily: 'RobotoSlab_400Regular' }}
          >
            {savedData}
          </TextInput>
          <Feather name="calendar" size={20} color={isFocused ? '#ff9000' : notFilled ? '#666360' : '#fff'} />
        </Container>
      </Touchable>
      {!!isFocused ?
        <>
          <DateTimePicker
            value={selectedDate}
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
      :
        <></>
      }
    </>
    // <View>
    //   <View>
    //     <Button onPress={showMode} title="Show date picker!" />
    //   </View>
    //   {show && (
    //     <DateTimePicker
    //       value={date}
    //       mode="date"
    //       display="default"
    //       onChange={onChange}
    //     />
    //   )}
    // </View>
  );
}

export default DatePicker;