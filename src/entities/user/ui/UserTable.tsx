import type { ReactElement } from 'react'
import type { User } from '../model/types'
import styles from './UserTable.module.css'

interface UserTableProps {
  /** Пользователи для отображения, в порядке добавления */
  users: User[]
}

const getFullName = (user: User): string => `${user.firstName} ${user.lastName}`

// data-label используется на узких экранах, где строки таблицы превращаются в карточки
export const UserTable = ({ users }: UserTableProps): ReactElement => {
  const usersById: Map<User['id'], User> = new Map(users.map((user: User) => [user.id, user]))

  const getAssignedName = (user: User): string => {
    const assignedUser = user.assignedUserId ? usersById.get(user.assignedUserId) : undefined
    return assignedUser ? getFullName(assignedUser) : '—'
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>№</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Присвоен</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: User, index: number) => (
          <tr key={user.id}>
            <td data-label="№">{index + 1}</td>
            <td data-label="Имя">{user.firstName}</td>
            <td data-label="Фамилия">{user.lastName}</td>
            <td data-label="Присвоен">{getAssignedName(user)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
