import { AdditionalInfoItem, Image, Info, InfoTitle, Title } from 'Pages/MoviesDetails/MoviesDetails.styled';
import {  useLocation } from 'react-router-dom';
import { MovieCard } from './MoviesItems.styled';
import posterBg from '../../utilities/img/hacker-3342696_640.jpg';

import PropTypes from 'prop-types';

function MoviesItems({ id, title, poster, voteAverage, voteCount }) {
    const location = useLocation();
  
   const totalVoteAverage = 10;
   const percent = (voteAverage * 100) / totalVoteAverage;
  return (
    <MovieCard>
      <AdditionalInfoItem to={`/movies/${id}`} state={{ from: location }}>
        <Title>{title ? title : 'Movie without a title'}</Title>
        <Image
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : posterBg}
          alt={title}
        />
        <div>
          <InfoTitle>
            Vote average: <Info>{percent.toFixed()}%</Info>
          </InfoTitle>
          <InfoTitle>
            Vote count:<Info> {voteCount}</Info>
          </InfoTitle>
        </div>
      </AdditionalInfoItem>
    </MovieCard>
  );
}
export default MoviesItems;
MoviesItems.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  voteCount: PropTypes.number,
  voteAverage: PropTypes.number,
};