import type { InputHTMLAttributes, ReactElement } from 'react'
import styles from './TextField.module.css'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /** id поля ввода; связывает его с подписью и текстом ошибки */
  id: string
  /** Текст подписи над полем */
  label: string
  /** Текст ошибки валидации; если задан, поле подсвечивается как невалидное */
  error?: string
}

export const TextField = ({ id, label, error, ...inputProps }: TextFieldProps): ReactElement => {
  const errorId: string | undefined = error ? `${id}-error` : undefined

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        className={styles.input}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        {...inputProps}
      />
      {error && (
        <span id={errorId} className={styles.error}>
          {error}
        </span>
      )}
    </div>
  )
}
