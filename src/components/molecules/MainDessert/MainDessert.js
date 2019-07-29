import React from 'react'
import styled from 'styled-components'; 
import Section from '../../atoms/Section/Section';
import dessert from '../../../assets/backgrounds/dessert.jpg'
import Description from '../../atoms/Description/Description';


const StyledInnerWrapper = styled.div`
width : 100% ; 
height : 100% ;
padding : 20vh 10vw;
position : relative; 

@media (orientation : portrait) { 
    
}
`

const MainDessert = ()=>( 
<Section dark url={dessert}> 
<StyledInnerWrapper>
<Description>
Stoi za nami wieloletnie doświadczenie,  
setki zadowolonych klientów oraz 
dziesiątki udanych imprez. 
U nas masz gwarancję najsmaczniejszych 
wypieków oraz atrakcyjnych cen.
  

</Description>

</StyledInnerWrapper>

</Section>


)



export default MainDessert; 