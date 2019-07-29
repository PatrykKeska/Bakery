import styled,{css} from 'styled-components';
import React from 'react';

const StyledWrapper = styled.section`
width : 99vw; 
min-height : 100vh; 
overflow : hidden; 
background-image :url(${({url})=>url});
background-repeat : no-repeat; 
background-position : center; 
background-size : cover; 
position : relative;
padding : 5px; 


${({long})=>
long && css `
min-height : 130vh; 
`
}

${({dark})=>
dark && css `

::after { 
    content : ''; 
    width : 100% ; 
    height : 100% ; 
    position : absolute; 
    top : 0 ; 
    left : 0; 
    background-color: rgba(0,0,0,.5); 


}

`}`;



const Section = ({url, dark,children, long})=> ( 
<StyledWrapper dark={dark} long={long}  url={url}>
{children}
</StyledWrapper>

)







export default Section