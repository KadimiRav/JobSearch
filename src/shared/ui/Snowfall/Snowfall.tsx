import { useState, type CSSProperties, type ReactElement } from 'react'
import styles from './Snowfall.module.css'

/** Параметры одной снежинки */
interface Snowflake {
  /** Ключ для React */
  id: number
  /** Положение по горизонтали, % ширины экрана */
  left: number
  /** Диаметр, px */
  size: number
  /** Длительность падения, с */
  duration: number
  /** Задержка старта, с (отрицательная — снежинка уже в полёте при загрузке) */
  delay: number
  /** Смещение по горизонтали за время падения, px */
  drift: number
  /** Непрозрачность от 0 до 1 */
  opacity: number
}

interface SnowfallProps {
  /** Количество снежинок. По умолчанию 40 */
  count?: number
}

const random = (min: number, max: number): number => min + Math.random() * (max - min)

const createSnowflakes = (count: number): Snowflake[] =>
  Array.from({ length: count }, (_, id: number): Snowflake => {
    const duration = random(8, 18)
    return {
      id,
      left: random(0, 100),
      size: random(3, 7),
      duration,
      delay: -random(0, duration),
      drift: random(-60, 60),
      opacity: random(0.4, 0.9),
    }
  })

/** Декоративный падающий снег поверх страницы; не перехватывает клики и скрыт при prefers-reduced-motion */
export const Snowfall = ({ count = 40 }: SnowfallProps): ReactElement => {
  // Параметры генерируются один раз, чтобы снежинки не «прыгали» при перерисовке
  const [snowflakes] = useState<Snowflake[]>(() => createSnowflakes(count))

  return (
    <div className={styles.snowfall} aria-hidden="true">
      {snowflakes.map((flake: Snowflake) => (
        <span
          key={flake.id}
          className={styles.flake}
          style={
            {
              left: `${flake.left}%`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              opacity: flake.opacity,
              animationDuration: `${flake.duration}s`,
              animationDelay: `${flake.delay}s`,
              '--drift': `${flake.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
