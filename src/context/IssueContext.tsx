import {
  ReactNode,
  useState,
  createContext,
  useEffect,
  useCallback,
} from 'react'
import { api } from '../pages/api'

interface ReactionsProps {
  total_count: number
  confused: number
  eyes: number
  heart: number
  hooray: number
  laugh: number
  rocket: number
}

interface UserProps {
  login: string
}

interface Issues {
  id: number
  title: string
  body: string
  created_at: Date
  comments: number
  comments_url: string
  repository_url: string
  url: string
  user: UserProps
  reactions: ReactionsProps
}

interface IssueContextType {
  issues: Issues[]
  fetchIssue: (query: string) => void
}

interface IssueProviderProps {
  children: ReactNode
}

export const IssueContext = createContext({} as IssueContextType)

export function IssueProvider({ children }: IssueProviderProps) {
  const [issues, setIssues] = useState<Issues[]>([])

  const fetchIssue = useCallback(async (query: string) => {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:macsueldias/github-blog`,
      // {
      //   params: {
      //     _sort: 'createdAt',
      //     _order: 'desc',
      //     q: query,
      //   },
      // },
    )
    const data = await response.data
    setIssues(data.items)
  }, [])

  useEffect(() => {
    fetchIssue('')
  }, [fetchIssue])

  return (
    <IssueContext.Provider value={{ issues, fetchIssue }}>
      {children}
    </IssueContext.Provider>
  )
}
