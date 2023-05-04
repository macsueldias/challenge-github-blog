/* eslint-disable camelcase */
/* eslint-disable react/no-children-prop */
import { useContext, useState } from 'react'
import { PostInfo } from './components/PostInfo'
import { ContainerPost, GroupReactions, ReactItem, Rections } from './styles'
import remarkGfm from 'remark-gfm'
import { useQuery } from 'react-query'
import { api } from '../api'
import { useParams } from 'react-router-dom'
import { IssueContext } from '../../context/IssueContext'

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

export const Post = () => {
  const [infoUser, setInfoUser] = useState<IssuesProps>({} as IssuesProps)

  const { id } = useParams()

  const { issues } = useContext(IssueContext)
  const issueCurrent = issues.filter((issue) => issue.id === Number(id))[0]

  const { isLoading, error } = useQuery(
    `issue-${id}`,
    async () => {
      const response = await api.get(`users/${issueCurrent.user.login}`)
      const data = await response.data
      console.log(data)
    },
    {
      onSuccess(data) {
        // setInfoUser(data)
      },
    },
  )

  return (
    <>
      {isLoading ? (
        <p>Carregando</p>
      ) : error ? (
        <p>Error...</p>
      ) : (
        <>
          {/* <PostInfo {...infoUser} /> */}
          {/* <Rections>
            <GroupReactions>
              {infoIssue.reactions.eyes > 0 && (
                <ReactItem>
                  {infoIssue.reactions.eyes}
                  <img src="../../../../src/assets/icons/eye.png" alt="" />
                </ReactItem>
              )}
              {infoIssue.reactions.heart > 0 && (
                <ReactItem>
                  {infoIssue.reactions.heart}
                  <img src="../../../../src/assets/icons/heart.png" alt="" />
                </ReactItem>
              )}
              {infoIssue.reactions.rocket > 0 && (
                <ReactItem>
                  {infoIssue.reactions.rocket}
                  <img src="../../../../src/assets/icons/rocket.png" alt="" />
                </ReactItem>
              )}
              {infoIssue.reactions.confused > 0 && (
                <ReactItem>
                  {infoIssue.reactions.confused}
                  <img src="../../../../src/assets/icons/confused.png" alt="" />
                </ReactItem>
              )}
              {infoIssue.reactions.hooray > 0 && (
                <ReactItem>
                  {infoIssue.reactions.hooray}
                  <img src="../../../../src/assets/icons/confetti.png" alt="" />
                </ReactItem>
              )}
            </GroupReactions>
          </Rections> */}
          <ContainerPost remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
            {issueCurrent.body}
          </ContainerPost>
        </>
      )}
    </>
  )
}
