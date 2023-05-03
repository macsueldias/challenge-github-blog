import { NavLink } from 'react-router-dom'
import { InfoContainer, TitleInfoPost } from './styles'
import { ArrowSquareOut, CaretLeft } from '@phosphor-icons/react'
import { GroupListSocial, ItemSocial } from '../../../../styles/global'

interface UserProps {
  avatar_url: string
  login: string
}

interface ReactionsProps {
  confused: number
  heart: number
  hooray: number
  laugh: number
  rocket: number
  eyes: number
}

interface IssuesProps {
  author_association: string
  body: string
  comments: number
  comments_url: string
  created_at: string
  url: string
  state: string
  title: string
  reactions: ReactionsProps
  user: UserProps
}

export const PostInfo = (infoIssue: IssuesProps) => {
  return (
    <InfoContainer>
      <nav>
        <NavLink to="/blog">
          <CaretLeft size={16} weight="bold" /> VOLTAR
        </NavLink>
        <NavLink to="https://github.com/macsueldias">
          VER NO GITHUB{' '}
          <ArrowSquareOut size={16} style={{ fontWeight: 'bold' }} />
        </NavLink>
      </nav>
      <TitleInfoPost>{infoIssue.title}</TitleInfoPost>
      <GroupListSocial>
        <ItemSocial>
          <img src="../../../src/assets/icons/github.svg" alt="Github" />
          {infoIssue.user.login}
        </ItemSocial>
        <ItemSocial>
          <img src="../../../src/assets/icons/building.svg" alt="Build" />
          TBRWEB
        </ItemSocial>
        <ItemSocial>
          <img src="../../../src/assets/icons/user-group.svg" alt="Users" />7
          seguidores
        </ItemSocial>
      </GroupListSocial>
    </InfoContainer>
  )
}
