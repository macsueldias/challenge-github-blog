import { ReactNode, useState, useCallback, createContext } from 'react'
import { api } from '../pages/api'
import { useQuery } from 'react-query'
import { queryClient } from '../lib/queryClient'

interface Issues {
  query: string
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
  const [query, setQuery] = useState('')

  function fetchIssue(query: string) {
    const formatQuery = query.replace(/\s+/g, '%20')
    setQuery(formatQuery)
    queryClient.invalidateQueries('issue-query')
    refetch()
  }

  const { isLoading, error, refetch } = useQuery(
    'issue-query',
    async () => {
      const response = await api.get(
        `/search/issues?q=${query}%20repo:macsueldias/github-blog`,
      )
      const data = await response.data
      return await data
    },
    {
      onSuccess(data) {
        setIssues(data)
      },
    },
  )

  console.log(issues)

  //   useEffect(() => {
  //     fetchIssue()
  //   }, [fetchIssue])

  return (
    <IssueContext.Provider value={{ issues, fetchIssue }}>
      {children}
    </IssueContext.Provider>
  )
}
