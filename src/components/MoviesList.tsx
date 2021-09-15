import { memo, useEffect, useState } from "react";
import { api } from "../services/api";
import { Genre, Movie } from "../types";
import { MovieCard } from "./MovieCard";

interface MoviesListProps {
  genre: Pick<Genre, 'id'>
}

function MoviesListComponent({ genre }: MoviesListProps) {
  const [movies, setMovies] = useState<Movie[]>([])
  
  useEffect(() => {
    api
      .get<Movie[]>(`movies/?Genre_id=${genre.id}`)
      .then(movies => {
        setMovies(movies.data);
      })
  }, [genre]);
  
  return (
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard 
            key={movie.imdbID} 
            title={movie.Title} 
            poster={movie.Poster} 
            runtime={movie.Runtime} 
            rating={movie.Ratings[0].Value} 
          />
        ))}
      </div>
    </main>
  )
}

export const MoviesList = memo(MoviesListComponent)