import styled from 'styled-components'; 
import React from 'react';
import Nav from '../components/molecules/Nav/Nav'
import Section from '../components/atoms/Section/Section';
import contact from '../assets/backgrounds/contact.jpg'
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import phone from '.././assets/icons/phone.svg'
import facebook from '.././assets/icons/facebook.svg'
import location from '.././assets/icons/location.svg'

const StyledWrapper = styled.div`
margin : 0 auto; 
overflow-x : hidden; 
animation : appear .3s ease-in-out both; 



@keyframes appear {
    0%{ 
    opacity : 0 ; 
    transform : translateX(200px)
    }

    100%{ 

    }
}`

const InnerGrid = styled.div`
height : 100vh ;
 width : 100vw ; 
 display : grid ;
 grid-template-columns : 1fr; 
 grid-template-rows : 40vh 80px 80px;
 grid-gap : 10px; 
 margin-top : 20vh;
justify-items : center;
align-items : center;


@media(orientation:landscape)and (min-width :600px){ 
    grid-template-columns : repeat(3, 33vw); 
    grid-gap : 5px;
    justify-items : center;
align-items : start;
padding: 5px ;
}


`

const PhoneContainer = styled.div`
display : flex; 
flex-direction : column;

@media(orientation:landscape)and (min-width:600px){ 
grid-row-start : 1; 
   
}

`

const ContactPage = ()=> ( 
<StyledWrapper>
<Section long dark url={contact}>
<Nav/>
<InnerGrid>
    <PhoneContainer>
<ButtonIcon href="tel:695710985" icon={phone} >Barbara 695 710 985</ButtonIcon>
<ButtonIcon href="tel:691974594" icon={phone} >Marzena 691 974 594</ButtonIcon>
<ButtonIcon href="tel:691704339" icon={phone} >Teresa 691 704 339</ButtonIcon>
</PhoneContainer>
<ButtonIcon target="_blank" href='https://www.facebook.com/CukierniaKSMAK/' facebook icon={facebook} >Odwiedź nasz Facebook</ButtonIcon>
<ButtonIcon target="_blank" href='https://www.google.com/maps/place/Cukiernia+K-SMAK+S%C5%82opnice/@49.7124112,20.3506999,15z/data=!4m5!3m4!1s0x0:0xf719337a5ce31954!8m2!3d49.7124112!4d20.3506999' location icon={location} >Zlokalizuj Nas!</ButtonIcon>
</InnerGrid>
</Section>

</StyledWrapper>
)










export default ContactPage