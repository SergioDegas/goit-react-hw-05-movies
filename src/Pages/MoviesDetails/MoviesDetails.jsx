import { getMovieDetails } from 'Api/Api';
import { useParams } from 'react-router-dom';

export const MoviesDetails = () => {
  const { moviesId } = useParams();
    getMovieDetails(moviesId);
  return <div>Now showing product with id - {moviesId}</div>;
};
