import { ReactNode } from 'react'

interface ButtonPushProps {
  type?: 'button' | 'submit'
  onClick: () => void
  children: ReactNode
  disabled?: boolean
  isLoading?: boolean
  className?: string
}
export function ButtonPush({
  type = 'button',
  onClick,
  children,
  disabled = false,
  isLoading = false,
  className = '',
  ...props
}: ButtonPushProps) {
  return (
    <button
      className={`${className} bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded`}
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? 'Загрузка...' : children}
    </button>
  )
}
