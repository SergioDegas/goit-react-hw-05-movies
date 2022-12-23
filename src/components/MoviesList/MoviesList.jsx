import MoviesItems from "components/MoviesItems/MoviesItems";


function MoviesList({ movies }) {
   
  return (
    <ul>
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
    </ul>
  );
}


export default MoviesList;