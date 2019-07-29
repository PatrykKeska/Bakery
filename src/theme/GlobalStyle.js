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

html { font-size: calc(1em + 1vw) }

body { 
    font-family: 'Courgette', cursive, sans-serif; 
    font-size : 1.6rem; 
    margin : 0 auto; 
    overflow-x : hidden;
    
}
`;

export default GlobalStyle;
