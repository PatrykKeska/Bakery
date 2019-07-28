import React from 'react';
import GlobalStyle from '../theme/GlobalStyle';
import {ThemeProvider} from 'styled-components'; 
import {theme} from '../theme/MainTheme'
import Heading from '../components/atoms/Heading/Heading'
import Description from '../components/atoms/Description/Description';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon'
import Call from '../assets/icons/phone.svg'


function Root() {

  return (
<ThemeProvider theme={theme}>
    <div className="App">
    <GlobalStyle/>
    <Heading mobile >Cukiernia K-SMAK 
    Tradycyjne Wypieki z Pasją
    </Heading>
    <Description mobile>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis adipisci ad veniam cumque dolorem, totam impedit debitis deleniti quisquam, vero error? Assumenda obcaecati voluptatibus omnis excepturi, quis iste reprehenderit nemo.</Description>
   
   <ButtonIcon icon={Call}>Barbara 695 710 985</ButtonIcon>
   <ButtonIcon icon={Call}>Marzena 695 710 985</ButtonIcon>
   <ButtonIcon icon={Call}>Teresa 695 710 985</ButtonIcon>
   <ButtonIcon mobile icon={Call}>Barbara 695 710 985</ButtonIcon>
   <ButtonIcon mobile icon={Call}>Marzena 695 710 985</ButtonIcon>
   <ButtonIcon mobile icon={Call}>Teresa 695 710 985</ButtonIcon>
   <ButtonIcon facebook href="https://www.google.com" target="_blank">Odwiedz nasz Facebook</ButtonIcon>
   <ButtonIcon facebook mobile>Odwiedz nasz Facebook</ButtonIcon>
   <ButtonIcon location >Zlokalizuj Nas !</ButtonIcon>
   <ButtonIcon location mobile>Zlokalizuj Nas !</ButtonIcon>
    </div>
     </ThemeProvider>
  );
}

export default Root;
