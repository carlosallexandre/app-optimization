import { ButtonHTMLAttributes, memo, SetStateAction, useCallback } from 'react';

import { Icon } from './Icon';
import { Genre } from '../types';

import '../styles/button.scss';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  genre: Genre;
  selected: boolean;
  onClick: React.Dispatch<SetStateAction<Genre>>;
}

function ButtonComponent({ genre, selected, onClick, ...rest }: ButtonProps) {
  const handleClick = useCallback(() => onClick(genre), [])

  return (
    <button 
      type="button" 
      onClick={handleClick}
      {...(selected && { className: 'selected' })} 
      {...rest}
    >
      <Icon name={genre.name} color={selected ? '#FAE800' : '#FBFBFB'} />
      {genre.title}
    </button>
  );
}

export const Button = memo(ButtonComponent, (prevProps, nextProps) => {
  return prevProps.selected === nextProps.selected
})