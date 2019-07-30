import styled,{css} from 'styled-components'; 



const ButtonIcon = styled.a `
text-decoration : none; 
display :block ; 
position : relative; 
z-index : 4; 
text-align : center; 
background-color : ${({theme})=> theme.colors.orange }; 
font-family :'Courgette', cursive, sans-serif;
font-size : .6em; 
width : 80vw;
max-width : 400px; 
margin : 10px; 
padding : 20px 10px;
color : white; 
border-radius : 60px; 
border : none; 
background-image : url(${({icon})=>icon}); 
background-repeat : no-repeat;  
background-size : 7%; 
background-position :5%;
transition : transform .3s ease-in-out; 
will-change : transform;

:hover { 
    transform : scale(1.1);
    cursor: pointer;
}

@media(orientation : landscape) and (min-width :600px ){ 
    font-size : .35em; 
    width : 25vw;
    padding : 10px;
    margin : 10px; 

}

@media(min-width :1200px ){ 
font-size : 25px; 

}

${({facebook})=>
facebook && css `
background-color : ${({theme})=> theme.colors.blue};
padding-left :30px; 
@media(orientation:landscape){ 
    background-position :1%;
}

`
}

${({location })=> location && css `
background-color : ${({theme})=> theme.colors.pink};
background-position :15%;


`
}

`









export default ButtonIcon