import { useContext } from 'react'
import { PostInfo } from './components/PostInfo'
import { ContainerPost, GroupReactions, ReactItem, Rections } from './styles'
import remarkGfm from 'remark-gfm'
import { useParams } from 'react-router-dom'
import { IssueContext } from '../../context/IssueContext'

export const Post = () => {
  const { id } = useParams()

  const { issues } = useContext(IssueContext)
  const issueCurrent = issues.filter((issue) => issue.id === Number(id))[0]

  return (
    <>
      <PostInfo title={issueCurrent.title} />
      <Rections>
        <GroupReactions>
          {issueCurrent.reactions.eyes > 0 && (
            <ReactItem>
              {issueCurrent.reactions.eyes}
              <img src="../../../../src/assets/icons/eye.png" alt="" />
            </ReactItem>
          )}
          {issueCurrent.reactions.heart > 0 && (
            <ReactItem>
              {issueCurrent.reactions.heart}
              <img src="../../../../src/assets/icons/heart.png" alt="" />
            </ReactItem>
          )}
          {issueCurrent.reactions.rocket > 0 && (
            <ReactItem>
              {issueCurrent.reactions.rocket}
              <img src="../../../../src/assets/icons/rocket.png" alt="" />
            </ReactItem>
          )}
          {issueCurrent.reactions.confused > 0 && (
            <ReactItem>
              {issueCurrent.reactions.confused}
              <img src="../../../../src/assets/icons/confused.png" alt="" />
            </ReactItem>
          )}
          {issueCurrent.reactions.hooray > 0 && (
            <ReactItem>
              {issueCurrent.reactions.hooray}
              <img src="../../../../src/assets/icons/confetti.png" alt="" />
            </ReactItem>
          )}
        </GroupReactions>
      </Rections>
      <ContainerPost remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
        {issueCurrent.body}
      </ContainerPost>
    </>
  )
}
