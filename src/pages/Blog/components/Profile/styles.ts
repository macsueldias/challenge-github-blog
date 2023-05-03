import styled from 'styled-components'

export const ProfileContainer = styled.header`
  position: absolute;
  width: 54rem;
  left: 50%;
  transform: translate(-50%);
  margin: auto;
  display: flex;
  justify-content: start;
  gap: 2rem;
  margin-top: -110px;
  padding: 2.5rem 2rem 2rem 2.5rem;
  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  > img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 0.5rem;
    object-fit: cover;
  }
`

export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`

export const TitleProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${(props) => props.theme['base-blue']};
    font-weight: 700;
    text-decoration: none;
  }

  svg {
    font-weight: 700;
  }
`
export const DescriptionProfile = styled.div`
  margin-block: 0.5rem 1.5rem;
`
