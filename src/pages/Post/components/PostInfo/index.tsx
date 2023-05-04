import { NavLink } from 'react-router-dom'
import { InfoContainer, TitleInfoPost } from './styles'
import { ArrowSquareOut, CaretLeft } from '@phosphor-icons/react'
import { GroupListSocial, ItemSocial } from '../../../../styles/global'
import { useContext } from 'react'
import { IssueContext } from '../../../../context/IssueContext'

interface PostInfoProps {
  title: string
}

export const PostInfo = ({ title }: PostInfoProps) => {
  const { profile } = useContext(IssueContext)

  return (
    <InfoContainer>
      <nav>
        <NavLink to="/blog">
          <CaretLeft size={16} weight="bold" /> VOLTAR
        </NavLink>
        <NavLink to={profile.html_url}>
          VER NO GITHUB{' '}
          <ArrowSquareOut size={16} style={{ fontWeight: 'bold' }} />
        </NavLink>
      </nav>
      <TitleInfoPost>{title}</TitleInfoPost>
      <GroupListSocial>
        <ItemSocial>
          <img src="../../../src/assets/icons/github.svg" alt="Github" />
          {profile.name}
        </ItemSocial>
        <ItemSocial>
          <img src="../../../src/assets/icons/building.svg" alt="Build" />
          {profile.company}
        </ItemSocial>
        <ItemSocial>
          <img src="../../../src/assets/icons/user-group.svg" alt="Users" />7
          {profile.following} seguidores
        </ItemSocial>
      </GroupListSocial>
    </InfoContainer>
  )
}
