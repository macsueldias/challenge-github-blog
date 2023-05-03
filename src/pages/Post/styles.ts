import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const Rections = styled.div`
  margin-top: 14rem;
`

export const GroupReactions = styled.ul`
  display: flex;
  justify-content: end;
  align-items: baseline;
  gap: 1rem;
`

export const ReactItem = styled.li`
  list-style: none;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-span']};

  img {
    width: 0.875rem;
    margin-left: 0.3rem;
  }
`

export const ContainerPost = styled(ReactMarkdown)`
  padding: 2.5rem 2rem;

  width: 100%;
  text-align: start;

  img {
    width: 300px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.5rem;
  }

  p {
    margin-block: 1rem;
  }

  p p {
    font-weight: 700;
  }

  pre {
    background: ${(props) => props.theme['base-post']};
    border-radius: 6px;
    margin-block: 1rem;
    padding: 0.5rem;
  }

  code {
    padding: 0.125rem;
    margin-inline: 0.5rem;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    background: ${(props) => props.theme['base-post']};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['base-blue']};
  }

  ul {
    margin-block: 1rem;

    li {
      margin: 0.75rem 0;
      list-style-type: square;
    }
  }
`
