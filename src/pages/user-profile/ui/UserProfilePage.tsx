import type { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers, UserTable, type User } from '@/entities/user'
import { UserProfileForm } from '@/features/edit-user-profile'
import { GenerateAssignmentsButton } from '@/features/generate-assignments'
import styles from './UserProfilePage.module.css'

export const UserProfilePage = (): ReactElement => {
  const users: User[] = useSelector(selectUsers)

  return (
    <main className={styles.page}>
      <h1>Пользователи</h1>

      <section className={styles.section}>
        <h2>Новый пользователь</h2>
        <UserProfileForm />
      </section>

      <section className={styles.section}>
        <h2>Сохранённые пользователи ({users.length})</h2>
        {users.length > 0 ? (
          <>
            <div className={styles.toolbar}>
              <GenerateAssignmentsButton />
            </div>
            <UserTable users={users} />
          </>
        ) : (
          <p>Пользователей пока нет.</p>
        )}
      </section>
    </main>
  )
}
