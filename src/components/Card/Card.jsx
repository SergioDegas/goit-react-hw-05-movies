import { getMovieCredits } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Ul } from 'components/MoviesList/MoviesList.styled';
import {  Info, InfoTitle } from 'Pages/MoviesDetails/MoviesDetails.styled';
import posterBg from '../../utilities/img/hacker-3342696_640.jpg';
import { Actors, ActorsImage } from './Card.styled';
import Loader from 'components/Loader/Loader';

function Card() {
     const { moviesId } = useParams();
     const [items, setItems] = useState([]);
     const [isLoading, setIsLoading] = useState(false);

     useEffect(() => {
       const fetch = async () => {
         try {
           setIsLoading(true);
           const { cast } = await getMovieCredits(moviesId);
           // console.log(cast);
           const imagesArray = cast.map(
             ({ id, original_name, profile_path, character }) => {
               return {
                 id,
                 original_name,
                 profile_path,
                 character,
               };
             }
           );

           console.log(imagesArray);
           setItems(imagesArray);
         } catch (error) {
           toast.error('Oops! Something went wrong! Please try again.');
         } finally {
           setIsLoading(false);
         }
       };
       fetch();
     }, [moviesId]);
  
  return (
    <>
  {items.length > 0 && items ?  <Ul>
      {items.map(
        ({ id, profile_path,  original_name, character }) => {
          return (
            <Actors key={id}>
              <ActorsImage
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : posterBg
                }
                alt={original_name}
              />
              <div>
                <InfoTitle>
                  Actor name: <Info>{original_name}</Info>
                </InfoTitle>
                <InfoTitle>
                  Name in the film:<Info> {character}</Info>
                </InfoTitle>
              </div>
            </Actors>
          );
        }
      )}
      </Ul>
      : <p> No cards</p>}

      {isLoading && <Loader />}
      </>
  );
}

export default Card;
