import styled,{css} from 'styled-components'; 



const Heading = styled.h1`
font-size : ${({theme})=> theme.fontSize.DesktopTittle }; 
background-color : ${({theme})=> theme.colors.black };
color : white; 
text-align : center; 


${({mobile})=> 
mobile && css `
font-size : ${({theme})=> theme.fontSize.MobileTittle }; 
padding : 20px 10px; 
`
}

`


export default Heading ; 