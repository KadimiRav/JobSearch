import type { EntityState } from '@reduxjs/toolkit'

/** Личные данные пользователя, вводимые в форме */
export interface UserProfile {
  /** Имя пользователя */
  firstName: string
  /** Фамилия пользователя */
  lastName: string
}

/** Сохранённый пользователь */
export interface User extends UserProfile {
  /** Уникальный идентификатор, генерируется при сохранении */
  id: string
  /** id присвоенного пользователя; null — назначения ещё не сгенерированы */
  assignedUserId: string | null
}

/** Назначения: id пользователя → id присвоенного ему пользователя */
export type UserAssignments = Record<User['id'], User['id']>

/** Состояние слайса пользователей: нормализованный список (ids + entities) */
export type UsersState = EntityState<User, User['id']>
