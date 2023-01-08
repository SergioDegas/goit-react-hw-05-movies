import MoviesItems from "components/MoviesItems/MoviesItems";
import { Ul } from "./MoviesList.styled";
import PropTypes from 'prop-types';

function MoviesList({ movies }) {
   
  return (
  
      <Ul>
        {movies.map(({ id, title, poster, voteAverage, voteCount }) => {
          return (
            <MoviesItems
              id={id}
              title={title}
              poster={poster}
              voteAverage={voteAverage}
              voteCount={voteCount}
              key={id}
            />
          );
        })}
      </Ul>
   
  );
}


MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;