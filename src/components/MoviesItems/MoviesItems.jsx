import { Link, useLocation } from 'react-router-dom';

function MoviesItems({ id, title, poster, voteAverage, voteCount }) {
    const location = useLocation();
    const posterBg=null
  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <h2>{title ? title : 'Movie without a title'}</h2>
        <img
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : posterBg}
          alt={title}
        />
        <div>
          <p>
            Vote average: <span>{voteAverage}</span>
          </p>
          <p>
            Vote count:<span> {voteCount}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
export default MoviesItems;