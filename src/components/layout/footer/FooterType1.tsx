// src/components/layout/Footer/FooterType1.tsx
import React from 'react'

interface Props {
  className?: string
}

const FooterType1: React.FC<Props> = ({ className }) => {
  return (
    <footer className={className}>
      <p>Footer Type 1</p>
    </footer>
  )
}
export default FooterType1
