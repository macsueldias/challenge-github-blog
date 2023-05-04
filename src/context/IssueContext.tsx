/* eslint-disable camelcase */
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

interface ProfileProps {
  name: string
  bio: string
  avatar_url: string
  company: string
  following: number
  html_url: string
  public_repos: number
}

interface IssueContextType {
  issues: Issues[]
  profile: ProfileProps
  fetchIssue: (query: string) => void
}

interface IssueProviderProps {
  children: ReactNode
}

export const IssueContext = createContext({} as IssueContextType)

export function IssueProvider({ children }: IssueProviderProps) {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps)
  const [issues, setIssues] = useState<Issues[]>([])

  const fetchIssue = useCallback(async (query: string) => {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:macsueldias/github-blog`,
    )
    const data = await response.data
    setIssues(data.items)
  }, [])

  const fetchProfile = async () => {
    const response = await api.get(`users/macsueldias`)
    const data = await response.data

    const {
      name,
      bio,
      avatar_url,
      company,
      following,
      html_url,
      public_repos,
    } = data
    setProfile({
      name,
      bio,
      avatar_url,
      company,
      following,
      html_url,
      public_repos,
    })
  }

  useEffect(() => {
    fetchIssue('')
    fetchProfile()
  }, [fetchIssue])

  return (
    <IssueContext.Provider value={{ profile, issues, fetchIssue }}>
      {children}
    </IssueContext.Provider>
  )
}
