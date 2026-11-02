import type { ReactElement, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/store'

interface StoreProviderProps {
  /** Дерево компонентов, которому нужен доступ к Redux-стору */
  children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps): ReactElement => (
  <Provider store={store}>{children}</Provider>
)
