import React from 'react'
import styled,{css} from 'styled-components'; 
import NavButton from '../../atoms/NavButton/NavButton';
import {NavLink} from 'react-router-dom';


const StyledWrapper = styled.nav`
width : 100vw; 
background-color  : ${({theme})=> theme.colors.blue}; 
height : 100vh;
position : fixed; 
top : 0 ; 
left : 0; 
z-index : 5;
animation : appear .3s linear both; 


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
top : 10px; 
left : 10px; 
border : none; 
z-index : 10;
display : flex; 
flex-direction : column; 


:hover { 
    cursor: pointer;
}

span{ 
display : block ; 
width : 50px; 
height : 3px; 
background-color : white; 
margin : 5px;
transition : transform .3s ease-in-out;
will-change : transform ; 
}
${({black})=> black&& css `
span{ 
    background-color : black;
}
`}

:hover .spn1 { 
   transform : rotate(30deg);
}
:hover .spn2 { 
   transform : translateX(-5%);
}
:hover .spn3 { 
   transform : rotate(-30deg);
}


`

const CloseButton = styled.button` 
background-color: transparent;  
position : fixed ;  
border : none;
top : 10px;
text-align : center; 
left : 5px; 
color : white;
padding : 15px 15px; 
border : none;  
transition : transform .2s linear ; 
will-change : transform ; 
 
:hover { 
    cursor: pointer;
    transform: scale(.8);
}


span{ 
display : block ; 
width : 50px; 
height : 3px; 
background-color : white; 
margin : 2px;
animation : appear .3s .2s  ease-in-out both;
transition: transform .3s ease-in-out; 
will-change : transform ;
}







.spc1{ 
    animation : appear .3s .2s  ease-in-out both, rotatePlus .2s .4s  ease-in-out both
}
.spc2{ 
    animation : appear .3s .2s  ease-in-out both, rotateMinus .2s .4s  ease-in-out both
}



@keyframes appear {
    0%{ 
        opacity :0 ; 

    }

    100%   { 
    

    }
}

@keyframes rotatePlus {
    0%{ 
          transform : rotate(0)translateX(100px);
    }

    100%{ 
     transform : rotate(45deg)translate(0);
    }
}
@keyframes rotateMinus {
    0%{ 
          transform : rotate(0)translateX(-100px);
    }

    100%{ 
     transform : rotate(-45deg)translate(0);
    }
}

`








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

    const {black} = this.props; 
    return ( 
          this.state.isOpen ? ( <StyledWrapper>
            <StyledUl>
        <CloseButton onClick={this.handleNavClose}> <span className='spc1'/><span className='spc2'/> </CloseButton>
        <NavButton onClick={this.handleNavClose} as={NavLink} to='/'>GŁÓWNA</NavButton>
        <NavButton onClick={this.handleNavClose} as={NavLink} to='/kontakt'>KONTAKT</NavButton>
        <NavButton onClick={this.handleNavClose} as={NavLink} to='/galeria' >GALERIA</NavButton>
        </StyledUl>
        </StyledWrapper>  ) : ( <BurgerButton black={black} onClick={this.handleNavOpen} >
         <span className='spn1'/>
         <span className='spn2'/>
         <span className='spn3'/>
        </BurgerButton>) 
         
        
    )

}


}









export default Nav; 