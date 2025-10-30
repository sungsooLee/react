// src/components/layout/Footer/FooterType2.tsx
import React from 'react'

interface Props {
  className?: string
}
const FooterType2: React.FC<Props> = ({ className }) => {
  return (
    <footer className={className}>
      <p>Footer Type 2</p>
    </footer>
  )
}
export default FooterType2
