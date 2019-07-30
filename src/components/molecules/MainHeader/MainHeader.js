import styled from 'styled-components';
import React from 'react';
import Heading from '../../atoms/Heading/Heading'
import Section from '../../atoms/Section/Section';
import mainBackground from '../../../assets/backgrounds/mainBackground.jpg';




const StyledHeader = styled.header `
display : flex; 
align-items : center ; 
justify-content : center ; 
height : 100vh;  

`
;

const MainHeader = ()=> ( 

<Section blur url={mainBackground}>
<StyledHeader>
 <Heading>Cukiernia K-SMAK <br/>
 Tradycyjne Wypieki z Pasją
 </Heading>
</StyledHeader>
 </Section>


    

)






export default MainHeader