import { useContext } from 'react'
import { Search } from '../../components/Search'
import { Profile } from './components/Profile'
import ReactMarkdown from 'react-markdown'

import {
  Posts,
  ContainerBlog,
  Post,
  TitlePost,
  DescriptionPost,
} from './styles'
import { IssueContext } from '../../context/IssueContext'

export const Blog = () => {
  const { issues } = useContext(IssueContext)
  const MAX_LENGTH = 250

  return (
    <>
      <Profile />
      <ContainerBlog>
        <Search amountIssue={issues.length} />
        <Posts>
          {issues.map((issue) => {
            return (
              <Post key={issue.id}>
                <TitlePost>
                  <h3>{issue.title}</h3>
                  <span>Há 1 dia</span>
                </TitlePost>
                <DescriptionPost>
                  <ReactMarkdown>
                    {`${issue.body.substring(0, MAX_LENGTH)}...`}
                  </ReactMarkdown>
                </DescriptionPost>
              </Post>
            )
          })}
        </Posts>
      </ContainerBlog>
    </>
  )
}
