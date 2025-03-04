import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'classnames'

interface TabLinkProps {
  to: string
  isActive?: boolean
  children: React.ReactNode
}

export function TabLink({ to, isActive = false, children }: TabLinkProps) {
  return (
    <Link
      to={to}
      className={clsx(
        'px-4 py-2 rounded-t transition-colors duration-200',
        isActive ? 'bg-page-bg text-black' : 'bg-header-bg text-white hover:text-black hover:bg-indigo-100',
      )}
    >
      {children}
    </Link>
  )
}
