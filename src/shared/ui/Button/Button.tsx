import type { ButtonHTMLAttributes, ReactElement } from 'react'
import styles from './Button.module.css'

/** Визуальный вариант кнопки */
type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Визуальный вариант: `primary` — основное действие, `secondary` — второстепенное. По умолчанию `primary` */
  variant?: ButtonVariant
}

export const Button = ({ variant = 'primary', type = 'button', className, ...props }: ButtonProps): ReactElement => (
  <button
    type={type}
    className={[styles.button, styles[variant], className].filter(Boolean).join(' ')}
    {...props}
  />
)
