import styled,{css} from 'styled-components'; 



const ButtonIcon = styled.a `
text-decoration : none; 
display :block ; 
text-align : center; 
background-color : ${({theme})=> theme.colors.orange }; 
font-family :'Courgette', cursive, sans-serif;
font-size :${({theme})=> theme.fontSize.DesktopContact} ;
margin : 10px; 
padding : 20px 10px;
width : 400px; 
color : white; 
border-radius : 60px; 
border : none; 
background-image : url(${({icon})=>icon}); 
background-repeat : no-repeat;  
background-size : 7%; 
background-position :5%;

${({mobile})=>
mobile && css `
font-size :${({theme})=> theme.fontSize.MobileContact} ;
width : 280px;  
`
}

${({facebook})=>
facebook && css `
background-color : ${({theme})=> theme.colors.blue}

`
}

${({location })=> location && css `
background-color : ${({theme})=> theme.colors.pink}

`
}

`









export default ButtonIcon