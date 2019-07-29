import React from 'react'
import styled from 'styled-components'; 
import NavButton from '../../atoms/NavButton/NavButton';
import close from '../../../assets/icons/close.svg'
import {NavLink} from 'react-router-dom';


const StyledWrapper = styled.nav`
width : 100vw; 
background-color  : ${({theme})=> theme.colors.blue}; 
height : 100vh;
position : fixed; 
top : 0 ; 
left : 0; 
z-index : 5;
animation : appear .2s linear both; 


@keyframes appear {
    0%{ 
        transform : translate(100vw, 0 );
        opacity : 0;
    }

    100%{ 
         
    }
}

`

const StyledUl = styled.ul`
width : 100% ; 
height : 100% ; 
display : flex ; 
padding : 10px;
justify-content : center ; 
align-items : center ; 
flex-direction : column; 
`

const BurgerButton = styled.button` 
background-color: transparent;  
position : fixed ;  
border  : 2px solid white; 
top : 10px; 
left : 10px; 
background-image : url(${({menu})=> menu});
color : white;
padding : 5px 10px; 
border-radius : 20px; 
z-index : 10; 



`

const CloseButton = styled.button` 
background-color: transparent;  
position : fixed ;  
border : none;
top : 10px;
text-align : center; 
left : 5px; 
background-image : url(${({close})=> close});
background-position : center ;
color : white;
padding : 15px 15px; 
border-radius : 20px; 
background-repeat : no-repeat; 



&.svg { 
   color : white; 
    
}`









class Nav extends React.Component{ 
state = {
    isOpen : false, 
}


handleNavOpen = ()=>  ( 
    this.setState({ 
        isOpen : true
    })
)

handleNavClose = ()=>  ( 
    this.setState({ 
        isOpen : false
    })
)



render (){ 

    return ( 
          this.state.isOpen ? ( <StyledWrapper>
            <StyledUl>
        <CloseButton onClick={this.handleNavClose} close={close}/>
        <NavButton onClick={this.handleNavClose} as={NavLink} to='/'>GŁÓWNA</NavButton>
        <NavButton onClick={this.handleNavClose} as={NavLink} to='/kontakt'>KONTAKT</NavButton>
        <NavButton >GALERIA</NavButton>
        </StyledUl>
        </StyledWrapper>  ) : ( <BurgerButton onClick={this.handleNavOpen} >MENU</BurgerButton>) 
         
        
    )

}


}









export default Nav; 