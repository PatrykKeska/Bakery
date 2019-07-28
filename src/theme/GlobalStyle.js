import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
@import url('https://fonts.googleapis.com/css?family=Courgette&display=swap');


*,*::before , *::after{ 
    box-sizing : border-box; 
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

html{ 
    font-size : 62.5% ; 
}

body { 
    font-family: 'Courgette', cursive, sans-serif; 
    font-size : 1.6rem; 
    
}
`;

export default GlobalStyle;
