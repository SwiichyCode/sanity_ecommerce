import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    * {
        box-sizing: border-box;
    }

    html {
        font-size: .625em; 
        font-size: calc(1em * .625); 
    }

    html,body {
        height: 100%;
    }

    body {
        font-size: 1.4rem; 
        font-family: 'Poppins', sans-serif;
        color: var(--color-text);
    }

    :root {
        --color-text: #333F51;
        --color-white: #FFFFFF;
        --color-blue: #042862;
        --color-blue-600: #03204A;
        --color-blue-hover: #2f70af;
        --color-red: #ef4444;
        --color-purple: #4500b6;
        --color-green: #22C55E;
        --color-grey-200: #D5DAE1;
        --color-grey-400: #8896AB;
        --color-grey-900: #2A3342;
        --rounded-md: 0.6rem;
        --rounded-lg: 0.8rem;
        --rounded-xl: 1.2rem;
        --rounded-2xl: 1.6rem;
        --shadow: 0px 32px 64px -12px rgba(85, 105, 135, 0.08);
        --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        --bg-radial: radial-gradient(
        50% 50% at 50% 50%,
        rgba(247, 248, 249, 0) 0%,
        #f7f8f9 100%
        );
    }
        
`;

export default GlobalStyle;
