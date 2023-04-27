import styled from 'styled-components'

export const ContainerHeader = styled.div`
  width: 100%;
`

export const Banner = styled.div`
  width: 100vw;

  img {
    width: 100%;
  }
`

export const Profile = styled.header`
  position: absolute;
  max-width: 54rem;
  left: 50%;
  transform: translate(-50%);
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: -110px;
  padding: 2.5rem 2rem 2rem 2.5rem;
  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 0.5rem;
  }
`

export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TitleProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${(props) => props.theme['base-blue']};
    font-weight: 700;
  }

  svg {
    font-weight: 700;
  }
`
export const DescriptionProfile = styled.div`
  margin-block: 0.5rem 1.5rem;
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
