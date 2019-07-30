import styled from 'styled-components'; 



const NavButton = styled.a `
text-decoration : none; 
display :block ;
position : relative;  
text-align : center; 
font-family :'Courgette', cursive, sans-serif;
font-size : .8em; 
margin : 10px; 
padding : 20px 10px;
color : white; 
border : none; 
z-index :1; 
overflow : hidden;
padding : 5px 30px;

::after { 
    content : ' '; 
    position : absolute; 
    top : 0 ; 
    right : 0 ; 
    background-color : yellowgreen ; 
    width : 100%;
    height : 100% ;
    z-index : -1; 
    border-radius : 20px 20px 20px 20px;
    transform : translateX(120%);
    transition : transform .4s ease-in-out; 
    will-change : transform; 

}

:hover::after {
    transform : translateX(0); 
}
`







export default NavButton; 