import { SetStateAction, useEffect, useState } from "react";
import { api } from "../services/api";
import { Genre } from "../types";
import { Button } from "./Button";

interface SideBarProps {
  selectedGenre: Genre;
  setSelectedGenre: React.Dispatch<SetStateAction<Genre>>;
}

export function SideBar({ selectedGenre, setSelectedGenre }: SideBarProps) {
  const [genres, setGenres] = useState<Genre[]>();

  useEffect(() => {
    api.get<Genre[]>('genres').then(response => {
      setGenres(response.data);
      setSelectedGenre(response.data.find(genre => genre.id === 1)!)
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres?.map(genre => (
          <Button 
            key={String(genre.id)} 
            genre={genre}
            onClick={setSelectedGenre}
            selected={selectedGenre.id === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}