import styled,{css} from 'styled-components';
import React from 'react';

const StyledWrapper = styled.section`
width : 99vw; 
min-height : 100vh; 
background-image :url(${({url})=>url});
background-repeat : no-repeat; 
background-position : center; 
background-size : cover; 
position : relative;
padding : 5px; 

${({blur})=> 
blur && css `

::after { 
    content : '';
    width : 100%;
    height : 20px; 
    position : absolute; 
    bottom : -10px; 
    left : 0 ; 
    z-index :2;
    background-color: #b1b4b1;
    filter: blur(5px)
}
`
}

${({long})=>
long && css `
min-height : 130vh; 
`
}

${({dark})=>
dark && css `

::before { 
    content : ''; 
    width : 100% ; 
    height : 100% ; 
    position : absolute; 
    top : 0 ; 
    left : 0;
    z-index : 1;  
    background-color: rgba(0,0,0,.5); 


}

`}`;



const Section = ({url, dark,children,long, blur})=> ( 
<StyledWrapper dark={dark} long={long} blur={blur} url={url}>
{children}
</StyledWrapper>

)







export default Section