import React from 'react';
import { useFonts, RobotoSlab_500Medium } from '@expo-google-fonts/roboto-slab';

import { Container, ButtonText } from './styles';

function Button({ children, ...rest }) {
  let [fontsLoaded] = useFonts({ RobotoSlab_500Medium });
  
  if(!fontsLoaded) return <></>;
  return (
    <Container {...rest}>
      <ButtonText style={{ fontFamily: 'RobotoSlab_500Medium' }}>{children}</ButtonText>
    </Container>
  );
}

export default Button;