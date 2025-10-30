// src/components/layout/Header/HeaderType2.tsx
import React from 'react'

interface Props {
  className?: string
}

const HeaderType2: React.FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <h1>Header2</h1>
    </header>
  )
}

export default HeaderType2
