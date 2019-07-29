import React from 'react'
import Description from '../../atoms/Description/Description';
import Section from '../../atoms/Section/Section'; 
import tradiction from '../../../assets/backgrounds/tradiction1920.jpg'
import styled from 'styled-components'; 

const StyledInnerWrapper = styled.div`
width : 100% ; 
height : 100% ;
padding : 2vh 10vw;
margin-top : 5vh;  
`

const MainDescription = ()=> ( 
    <Section dark url={tradiction}>
    <StyledInnerWrapper>
    <Description>
    Rodzinna cukiernia Kwiatkowskiej z córkami.
 Wieloletnia tradycja pieczenia ciast domowych,  
   ciasteczek, wykonywania tortów  
     oraz deserów. Od 30 lat na rynku.

    </Description>
    </StyledInnerWrapper>
    </Section>


)



export default MainDescription