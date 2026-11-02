import type { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { assignmentsGenerated, selectUsers, type User } from '@/entities/user'
import { Button } from '@/shared/ui'
import { createAssignments, MIN_USERS_FOR_ASSIGNMENTS } from '../lib/createAssignments'

export const GenerateAssignmentsButton = (): ReactElement => {
  const dispatch = useDispatch()
  const users: User[] = useSelector(selectUsers)
  const isDisabled: boolean = users.length < MIN_USERS_FOR_ASSIGNMENTS

  const handleClick = (): void => {
    dispatch(assignmentsGenerated(createAssignments(users.map((user: User) => user.id))))
  }

  return (
    <Button
      onClick={handleClick}
      disabled={isDisabled}
      title={isDisabled ? `Нужно минимум ${MIN_USERS_FOR_ASSIGNMENTS} пользователя` : undefined}
    >
      Сгенерировать
    </Button>
  )
}
