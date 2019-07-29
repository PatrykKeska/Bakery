import React from 'react'
import Section from '../../atoms/Section/Section'; 
import events from '../../../assets/backgrounds/events.jpg'
import Description from '../../atoms/Description/Description';
import styled from 'styled-components'; 
import List from '../../atoms/List/List';


const StyledInnerWrapper = styled.div`
width : 100% ; 
height : 100% ;
padding : .1vh 10vw;  
position : relative; 
`

const MainEvent = ()=> ( 
<Section dark url={events}>
    <StyledInnerWrapper>
<Description>Realizujemy Zamówienia Na Imprezy Okolicznośćiowe</Description>
<List/>
</StyledInnerWrapper>


</Section>

)


export default MainEvent ;