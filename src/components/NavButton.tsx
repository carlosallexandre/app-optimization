import { memo } from 'react'
import { Genre } from '../types'
import { Button, ButtonProps } from './Button'

interface NavButtonProps extends ButtonProps {
  genre: Genre;
}

function NavButtonComponent({ genre, ...rest }: NavButtonProps) {
  return (
    <Button
      {...rest}
      title={genre.title}
      iconName={genre.name}
    />
  )
}

export const NavButton = memo(NavButtonComponent)