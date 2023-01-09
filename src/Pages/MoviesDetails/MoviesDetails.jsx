import { getMovieDetails } from 'Api/Api';
import { Container } from 'components/App/App.styled';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {  Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import posterBg from '../../utilities/img/hacker-3342696_640.jpg';
import { AdditionalInfoItem, AdditionalTitle, Genres, GoBack, Image, Info, InfoTitle, MovieCard,  } from './MoviesDetails.styled';


export const MoviesDetails =() => {
  const { moviesId } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
    const navigate = useNavigate();
  const location = useLocation();
  const subLocation = location.state.from;
  // console.log('id', moviesId);
  


  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const result = await getMovieDetails(moviesId);
        // console.log(result);
        
    setItems(result);
           

      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [moviesId]);

  const onGoBack = () => navigate(location?.state?.from ?? '/');
const { original_title,
          genres,
          overview,
          poster_path,
          release_date,
          vote_average,
    vote_count } = items

   const totalVoteAverage = 10;
   const percent = (vote_average * 100) / totalVoteAverage;
  return (
    <main>
      <Container>
        <GoBack type="button" onClick={onGoBack}>
          Go back
        </GoBack>

        <MovieCard>
          <Image
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : posterBg
            }
            alt={original_title}
          />
          <div>
            <div>
              <h1>{original_title}</h1>
              <InfoTitle>{release_date}</InfoTitle>
            </div>
            <Genres>
              {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}
            </Genres>
            <InfoTitle>
              Overview: <Info> {overview}</Info>
            </InfoTitle>
            <div>
              <InfoTitle>
                Vote average: <span>{percent.toFixed()}%</span>
              </InfoTitle>
              <InfoTitle>
                Vote count: <span>{vote_count}</span>
              </InfoTitle>
            </div>
          </div>
        </MovieCard>

        <div>
          <AdditionalTitle>Additional Information</AdditionalTitle>
          <ul>
            <li>
              <AdditionalInfoItem to="cast" state={{ from: subLocation }}>
                Cast
              </AdditionalInfoItem>
            </li>
            <li>
              <AdditionalInfoItem to="reviews" state={{ from: subLocation }}>
                Reviews
              </AdditionalInfoItem>
            </li>
          </ul>
          <Outlet />
        </div>
      </Container>
      {isLoading && <Loader />}
      <Toaster />
    </main>
  );
}
