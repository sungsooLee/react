// src/components/layout/Footer/index.tsx
import React from 'react'
import FooterType1 from './FooterType1'
import FooterType2 from './FooterType2'
import type { FooterType } from '../Layout'

interface FooterProps {
  type: FooterType
  className?: string
}

const Footer: React.FC<FooterProps> = ({ type , className }) => {
  switch (type) {
    case 'type1':
      return <FooterType1 className={className} />
    case 'type2':
      return <FooterType2 className={className} />
    default:
      return null
  }
}

export default Footer
