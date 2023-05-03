/* eslint-disable camelcase */
/* eslint-disable react/no-children-prop */
import { useState } from 'react'
import { PostInfo } from './components/PostInfo'
import { ContainerPost, GroupReactions, ReactItem, Rections } from './styles'
import remarkGfm from 'remark-gfm'
import { useQuery } from 'react-query'
import { api } from '../api'

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
  const [infoIssue, setInfoIssue] = useState<IssuesProps>({} as IssuesProps)
  const [issue, setIssue] = useState('')

  const { isLoading, error } = useQuery(
    'issue',
    async () => {
      const response = await api.get(
        `search/issues?q=Assets%20Not%20Loaded%20with%20Backend%20Integration%20repo:macsueldias/github-blog`,
      )
      const data = await response.data.items[0]
      return data
    },
    {
      onSuccess(data) {
        const {
          author_association,
          body,
          comments,
          comments_url,
          created_at,
          url,
          state,
          title,
          reactions,
          user,
        } = data

        setInfoIssue({
          author_association,
          body,
          comments,
          comments_url,
          created_at,
          url,
          state,
          title,
          reactions,
          user,
        })
        setIssue(body)
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
          <PostInfo {...infoIssue} />
          <Rections>
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
          </Rections>
          <ContainerPost remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
            {issue}
          </ContainerPost>
        </>
      )}
    </>
  )
}
