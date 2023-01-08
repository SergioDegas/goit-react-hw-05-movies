import { getTrendingMovies } from 'Api/Api';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';



export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
   const [items, setItems] = useState([]);
   useEffect(() => {
     
       const fetch = async () => {
         try {
           setIsLoading(true);
           const { results,total_results } = await getTrendingMovies();

            if (!total_results) {
              toast.error('Sorry, but nothing was found for your request');
            }
            if (results) {
              const imagesArray = results.map(
                ({ id, original_title, poster_path, vote_average, vote_count  }) => {
                  return {
                    id,
                    title: original_title,
                    poster: poster_path,
                    voteAverage: vote_average,
                    voteCount: vote_count,
                  };
                }
              );

              setItems(imagesArray);
           
            }
         } catch (error) {
           toast.error('Oops! Something went wrong! Please try again.');
         } finally {
           setIsLoading(false);
         }
       };
       fetch()
     
   }, []);

// console.log(isLoading);
  return (
    <>
      <main>
        <MoviesList movies={items} />
        {isLoading && <Loader />}
        <Toaster />
      </main>
    </>
  );
};
