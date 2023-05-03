import { useContext } from 'react'
import { Search } from '../../components/Search'
import { Profile } from './components/Profile'

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

  return (
    <>
      <Profile />
      <ContainerBlog>
        <Search />
        <Posts>
          <Post>
            <TitlePost>
              <h3>JavaScript data types and data structures</h3>
              <span>Há 1 dia</span>
            </TitlePost>
            <DescriptionPost>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn.
            </DescriptionPost>
          </Post>
        </Posts>
      </ContainerBlog>
    </>
  )
}
