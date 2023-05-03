import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { IssueProvider } from './context/IssueContext'
import { queryClient } from './lib/queryClient'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IssueProvider>
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </ThemeProvider>
      </IssueProvider>
    </QueryClientProvider>
  )
}
