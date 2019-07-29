// import styled from 'styled-components'; 
import React from 'react'
import MainHeader from '../components/molecules/MainHeader/MainHeader'
import MainDescription from '../components/molecules/MainDescription/MainDescription';
import MainEvent from '../components/molecules/MainEvent/MainEvent';
import MainDessert from '../components/molecules/MainDessert/MainDessert';
import Nav from '../components/molecules/Nav/Nav';
import styled from 'styled-components';

const StyledWrapper = styled.div`
animation : appear .3s ease-in-out both; 


@keyframes appear {
    0%{ 
    opacity : 0 ; 
    transform : translateX(200px)
    }

    100%{ 

    }
}
`
const MainPage =()=> ( 
<StyledWrapper>
<MainHeader/>
<MainDescription/>
<MainEvent/>
<MainDessert/>
<Nav/>
</StyledWrapper>


)










export default MainPage