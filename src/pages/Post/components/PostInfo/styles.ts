import styled from 'styled-components'

export const InfoContainer = styled.header`
  position: absolute;
  width: 54rem;
  left: 50%;
  transform: translate(-50%);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  margin-top: -110px;
  padding: 2.5rem 2rem 2rem 2.5rem;
  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  nav {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: ${(props) => props.theme['base-blue']};
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 700;
    }
  }
`

export const TitleInfoPost = styled.h3`
  text-align: left;
  color: ${(props) => props.theme['base-title']};
  font-size: 1.5rem;
  font-weight: 700;
`
