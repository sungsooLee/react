import { useState } from 'react'
import cn from 'classnames'
import styles from './ToggleButton.module.scss'

interface ToggleButtonProps {
  initial?: boolean
  label?: string
  onToggle?: (state: boolean) => void
  className?: string
}

const ToggleButtonComponent = ({ label, initial = false, onToggle, className }: ToggleButtonProps) => {
  const [toggled, setToggled] = useState(initial)

  const handleClick = () => {
    const newState = !toggled
    setToggled(newState)
    if (onToggle) onToggle(newState)
  }

  return (
    <button
      type='button'
      onClick={handleClick}
      className={cn(styles.btn, { [styles.active]: toggled }, className)}
    >
      {label}
    </button>
  )
}

export const ToggleButton = ToggleButtonComponent
