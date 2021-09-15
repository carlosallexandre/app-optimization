import { useState } from 'react';

import { Genre } from './types';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre>({} as Genre)

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
      <Content selectedGenre={selectedGenre} />
    </div>
  )
}