import { MovieCard } from '../components/MovieCard';
import '../styles/content.scss';

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreResponseProps {
  title: string;
}

interface contentProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}


export function Content(content: contentProps) {
  // Complete aqui

  return (
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {content.selectedGenre.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {content.movies.map(movie => (
          <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )
}