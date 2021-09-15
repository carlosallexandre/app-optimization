import { Genre } from "../types";
import { Header } from "./Header";
import { MoviesList } from "./MoviesList";

interface ContentProps {
  selectedGenre: Genre;
}

export function Content({ selectedGenre }: ContentProps) {
  
  return (
    <div className="container">
      <Header title={selectedGenre.title} />
      <MoviesList genre={selectedGenre} />
    </div>
  )
}