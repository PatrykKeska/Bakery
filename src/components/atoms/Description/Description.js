import styled,{css} from 'styled-components'; 




const Description = styled.p `
font-size : ${({theme})=> theme.fontSize.DesktopDescription };
color : white;
background-color: black; 
text-align : center;

${({mobile})=>  

mobile && css `
font-size : ${({theme})=> theme.fontSize.MobileDescription };
padding : 20px 10px; 
`}
`





export default Description
