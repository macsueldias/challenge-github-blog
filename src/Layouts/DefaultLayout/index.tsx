import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { ContentLayout, LayoutContainer } from './styles'

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <ContentLayout>
        <Outlet />
      </ContentLayout>
    </LayoutContainer>
  )
}
