import React from 'react';
import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { FontAwesome } from '@expo/vector-icons';

import { Touchable, Container, CheckboxContainer, LabelContainer, LabelText } from './styles';

function Checkbox({ name, label = '', isChecked = false, setIsChecked = () => {} }) {
  let [fontsLoaded] = useFonts({ RobotoSlab_400Regular });
  
  if(!fontsLoaded) return <></>;
  return (
    <Touchable onPress={setIsChecked}>
      <Container>
        <CheckboxContainer isChecked={isChecked}>
          {!!isChecked && <FontAwesome name='check' size={18} color='#fff' />}
        </CheckboxContainer>
        <LabelText style={{ fontFamily: 'RobotoSlab_400Regular' }}>{label}</LabelText>
      </Container>
    </Touchable>
  );
}

export default Checkbox;