import type { UserProfile } from '@/entities/user'

/** Значения формы: пока пользователь не заполнил поле, его значение отсутствует */
export interface UserProfileFormValues {
  /** Имя пользователя */
  firstName?: string
  /** Фамилия пользователя */
  lastName?: string
}

/** Ошибки валидации формы; отсутствие ключа означает, что поле валидно */
export interface UserProfileFormErrors {
  /** Ошибка в поле «Имя» */
  firstName?: string
  /** Ошибка в поле «Фамилия» */
  lastName?: string
}

const NAME_PATTERN: RegExp = /^\p{L}[\p{L}\s'-]*$/u
const NAME_MAX_LENGTH: number = 50

const validateName = (value: string | undefined): string | undefined => {
  const name = value?.trim()
  if (!name) return 'Обязательное поле'
  if (name.length > NAME_MAX_LENGTH) return `Не более ${NAME_MAX_LENGTH} символов`
  if (!NAME_PATTERN.test(name)) return 'Допустимы только буквы, пробел, дефис и апостроф'
  return undefined
}

export const validateUserProfile = (values: UserProfileFormValues): UserProfileFormErrors => {
  const errors: UserProfileFormErrors = {}

  const firstNameError = validateName(values.firstName)
  if (firstNameError) errors.firstName = firstNameError

  const lastNameError = validateName(values.lastName)
  if (lastNameError) errors.lastName = lastNameError

  return errors
}

/** Сужает значения формы до UserProfile; вызывать только после успешной валидации */
export const toUserProfile = ({ firstName = '', lastName = '' }: UserProfileFormValues): UserProfile => ({
  firstName: firstName.trim(),
  lastName: lastName.trim(),
})
