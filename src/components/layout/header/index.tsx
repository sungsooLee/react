// src/components/layout/Header/index.tsx
import React from 'react'
import HeaderType1 from './HeaderType1'
import HeaderType2 from './HeaderType2'
import type { HeaderType } from '../Layout'

interface HeaderProps {
  type: HeaderType
  className?: string
}

const Header: React.FC<HeaderProps> = ({ type , className }) => {
  switch (type) {
    case 'type1':
      return <HeaderType1 className={className} />
    case 'type2':
      return <HeaderType2 className={className} />
    default:
      return null
  }
}

export default Header
