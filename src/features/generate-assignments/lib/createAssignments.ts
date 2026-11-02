import type { User, UserAssignments } from '@/entities/user'
import { shuffle } from '@/shared/lib'

/** Минимальное число пользователей, при котором можно сгенерировать назначения */
export const MIN_USERS_FOR_ASSIGNMENTS: number = 2

/**
 * Случайно присваивает каждому пользователю другого пользователя.
 * Перемешивает список и замыкает его в круг: каждый получает следующего, последний — первого.
 * Поэтому никто не достаётся сам себе и каждый присвоен ровно одному человеку.
 */
export const createAssignments = (userIds: readonly User['id'][]): UserAssignments => {
  if (userIds.length < MIN_USERS_FOR_ASSIGNMENTS) return {}

  const shuffledIds: User['id'][] = shuffle(userIds)

  return Object.fromEntries(
    shuffledIds.map((userId: User['id'], index: number) => [userId, shuffledIds[(index + 1) % shuffledIds.length]]),
  )
}
