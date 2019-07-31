import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
@import url('https://fonts.googleapis.com/css?family=Courgette&display=swap');


*,*::before , *::after{ 
    box-sizing : border-box; 
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

/* html{ 
    font-size : 62.5% ; 
} */
body::-webkit-scrollbar {
    width: 1px;
}
 
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}


html { font-size: calc(1em + 1vw);
  font-family: 'Courgette', cursive, sans-serif; 
}


body { 
    font-family: 'Courgette', cursive, sans-serif; 
    font-size : 1.6rem; 
    margin : 0 auto; 
    display : flex; 
    justify-content : center; 
    align-items : center;
    overflow-x : hidden;
    
}
`;

export default GlobalStyle;
