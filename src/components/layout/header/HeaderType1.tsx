// src/components/layout/Header/HeaderType1.tsx
import React from 'react'

interface Props {
  className?: string
}

const HeaderType1: React.FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <h1>Portfolio</h1>
    </header>
  )
}

export default HeaderType1
