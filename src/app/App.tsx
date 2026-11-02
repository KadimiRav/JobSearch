import type { ReactElement } from 'react'
import { UserProfilePage } from '@/pages/user-profile'
import { Snowfall } from '@/shared/ui'
import { Header } from '@/widgets/header'
import { StoreProvider } from './providers/StoreProvider'
import { ThemeProvider } from './providers/ThemeProvider'
import './styles/index.css'

export const App = (): ReactElement => (
  <StoreProvider>
    <ThemeProvider>
      <Snowfall />
      <Header />
      <UserProfilePage />
    </ThemeProvider>
  </StoreProvider>
)
