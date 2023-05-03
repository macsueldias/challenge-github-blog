import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;  
        font-weight: 400;
        font-size: 1rem;
    }
`

export const GroupListSocial = styled.ul`
  display: flex;
  gap: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ItemSocial = styled.li`
  display: flex;
  gap: 0.5rem;

  img {
    height: 1.1rem;
    width: 1.1rem;
  }
`
