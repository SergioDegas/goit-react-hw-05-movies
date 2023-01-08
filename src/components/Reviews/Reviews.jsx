import { getMovieReviews } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Info, InfoTitle } from 'Pages/MoviesDetails/MoviesDetails.styled';
import Loader from 'components/Loader/Loader';

function Reviews() {
  const { moviesId } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const  {results}  = await getMovieReviews(moviesId);
        console.log(results);
        const imagesArray = results.map(({ id, author, content }) => {
          return {
            id,
            author,
            content,
          };
        });

        // console.log(imagesArray);
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
      <ul>
        {items.length > 0 && items ? (
          items.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <div>
                  <InfoTitle>
                    Name: <Info>{author}</Info>
                  </InfoTitle>
                  <InfoTitle>
                    Review:<Info> {content}</Info>
                  </InfoTitle>
                </div>
              </li>
            );
          })
        ) : (
          <p>No reviews</p>
        )}
      </ul>
      {isLoading && <Loader />}
    </>
  );
}

export default Reviews;
