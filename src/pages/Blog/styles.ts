import styled from 'styled-components'

export const ContainerBlog = styled.div`
  width: 100%;
`
export const Posts = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-block: 3rem;

  a {
    text-decoration: none;
  }
`

export const Post = styled.div`
  max-width: 26rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
`

export const TitlePost = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    width: 70%;
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    font-weight: 700;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const DescriptionPost = styled.div`
  color: ${(props) => props.theme['base-text']};
  line-height: 1.5rem;
  font-size: 0.875;
`
