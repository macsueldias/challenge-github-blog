import styled from 'styled-components'

export const ContainerSearch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 14rem;

  div {
    display: flex;
    align-items: baseline;
  }
`

export const TitlePublicacion = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-span']};
  }
`

export const Form = styled.form``

export const Input = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  width: 100%;
  padding: 0.75rem 0.875rem;
  border-radius: 6px;
  color: ${(props) => props.theme['base-subtitle']};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
