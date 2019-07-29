import styled from 'styled-components'; 
import React from 'react';

const Ul = styled.ul`
position : relative;
padding: 0;
height : 100% ; 
display : flex; 
flex-direction : column; 
position : relative; 
z-index : 2; 
align-items : left;
justify-content : center;
margin-top : 20vh;




`
const Li = styled.li`
font-size : .7em ; 
width : 100%; 
padding : 20px 10px; 
color : white; 
list-style : none ;

`


const List = ()=>  ( 

<Ul>
<Li>- Torty</Li>
<Li>- Ciasteczka</Li>
<Li>- Desery</Li>
<Li>- Ciasta Domowe</Li>


</Ul>
)








export default List