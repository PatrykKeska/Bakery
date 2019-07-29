import styled from 'styled-components'; 



const Heading = styled.h1`
background-color : ${({theme})=> theme.colors.black };
 font-size : 1em;
 width : 100%;  
color : white; 
text-align : center;  
padding : 10px;
border-radius : 5px; 

@media ( min-width : 640px) and (orientation:landscape) { 
    padding : 30px 10px; 
}
 `




export default Heading ; 