import type { FormApi } from 'final-form'
import type { ReactElement } from 'react'
import { Field, Form } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { userAdded } from '@/entities/user'
import { Button, TextField } from '@/shared/ui'
import { toUserProfile, validateUserProfile, type UserProfileFormValues } from '../model/validate'
import styles from './UserProfileForm.module.css'

export const UserProfileForm = (): ReactElement => {
  const dispatch = useDispatch()

  const handleSubmit = (values: UserProfileFormValues, form: FormApi<UserProfileFormValues>): void => {
    // Final Form вызывает onSubmit только после успешной валидации, поэтому все поля заполнены
    dispatch(userAdded(toUserProfile(values)))
    // restart, а не reset: сбрасывает ещё и touched, чтобы пустые поля не подсвечивались ошибками
    form.restart()
  }

  return (
    <Form<UserProfileFormValues>
      onSubmit={handleSubmit}
      validate={validateUserProfile}
      render={({ handleSubmit, form, pristine, submitting }) => (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <Field<string> name="firstName">
            {({ input, meta }) => (
              <TextField
                {...input}
                id="firstName"
                label="Имя"
                autoComplete="given-name"
                error={meta.touched ? meta.error : undefined}
              />
            )}
          </Field>

          <Field<string> name="lastName">
            {({ input, meta }) => (
              <TextField
                {...input}
                id="lastName"
                label="Фамилия"
                autoComplete="family-name"
                error={meta.touched ? meta.error : undefined}
              />
            )}
          </Field>

          <div className={styles.actions}>
            <Button type="submit" disabled={pristine || submitting}>
              Сохранить
            </Button>
            <Button variant="secondary" disabled={pristine || submitting} onClick={() => form.restart()}>
              Очистить
            </Button>
          </div>
        </form>
      )}
    />
  )
}
