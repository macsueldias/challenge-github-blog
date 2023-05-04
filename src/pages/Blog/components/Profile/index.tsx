import { useContext } from 'react'
import {
  DescriptionProfile,
  InfoProfile,
  ProfileContainer,
  TitleProfile,
} from './styles'
import { ArrowSquareOut } from '@phosphor-icons/react'
import { GroupListSocial, ItemSocial } from '../../../../styles/global'
import { NavLink } from 'react-router-dom'
import { IssueContext } from '../../../../context/IssueContext'

export const Profile = () => {
  const { profile } = useContext(IssueContext)

  return (
    <ProfileContainer>
      <img src={profile.avatar_url} alt="testes" />
      <InfoProfile>
        <TitleProfile>
          <h2>{profile.name}</h2>
          <NavLink to={profile.html_url}>
            GITHUB <ArrowSquareOut size={16} style={{ fontWeight: 'bold' }} />
          </NavLink>
        </TitleProfile>
        <DescriptionProfile>{profile.bio}</DescriptionProfile>
        <GroupListSocial>
          <ItemSocial>
            <img src="../../../src/assets/icons/github.svg" alt="Github" />
            macsueldias
          </ItemSocial>
          <ItemSocial>
            <img src="../../../src/assets/icons/building.svg" alt="Build" />
            {profile.company}
          </ItemSocial>
          <ItemSocial>
            <img src="../../../src/assets/icons/user-group.svg" alt="Users" />
            {profile.following} seguidores
          </ItemSocial>
        </GroupListSocial>
      </InfoProfile>
    </ProfileContainer>
  )
}
