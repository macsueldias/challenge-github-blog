/* eslint-disable camelcase */
import { useQuery } from 'react-query'
import { api } from '../../../api'
import { useState } from 'react'
import {
  DescriptionProfile,
  InfoProfile,
  ProfileContainer,
  TitleProfile,
} from './styles'
import { ArrowSquareOut } from '@phosphor-icons/react'
import { GroupListSocial, ItemSocial } from '../../../../styles/global'
import { NavLink } from 'react-router-dom'

interface ProfileProps {
  name: string
  bio: string
  avatar_url: string
  company: string
  following: number
  html_url: string
  public_repos: number
}

export const Profile = () => {
  // const [user, setUser] = useState<ProfileProps>({} as ProfileProps)

  // const { isLoading, error } = useQuery(
  //   'info-users',
  //   async () => {
  //     const response = await api.get(`users/macsueldias`)
  //     const data = await response.data
  //     return data
  //   },
  //   {
  //     onSuccess(data) {
  //       const {
  //         name,
  //         bio,
  //         avatar_url,
  //         company,
  //         following,
  //         html_url,
  //         public_repos,
  //       } = data
  //       setUser({
  //         name,
  //         bio,
  //         avatar_url,
  //         company,
  //         following,
  //         html_url,
  //         public_repos,
  //       })
  //     },
  //   },
  // )

  return (
    <>
      {/* {isLoading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>error...</p>
      ) : (
        <ProfileContainer>
          <img src={user.avatar_url} alt="testes" />
          <InfoProfile>
            <TitleProfile>
              <h2>{user.name}</h2>
              <NavLink to={user.html_url}>
                GITHUB{' '}
                <ArrowSquareOut size={16} style={{ fontWeight: 'bold' }} />
              </NavLink>
            </TitleProfile>
            <DescriptionProfile>{user.bio}</DescriptionProfile>
            <GroupListSocial>
              <ItemSocial>
                <img src="../../../src/assets/icons/github.svg" alt="Github" />
                macsueldias
              </ItemSocial>
              <ItemSocial>
                <img src="../../../src/assets/icons/building.svg" alt="Build" />
                {user.company}
              </ItemSocial>
              <ItemSocial>
                <img
                  src="../../../src/assets/icons/user-group.svg"
                  alt="Users"
                />
                {user.following} seguidores
              </ItemSocial>
            </GroupListSocial>
          </InfoProfile>
        </ProfileContainer> 
      )} */}
    </>
  )
}
