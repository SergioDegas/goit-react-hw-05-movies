import { searchByName } from 'Api/Api';
import Loader from 'components/Loader/Loader';

import MoviesList from 'components/MoviesList/MoviesList';
import Search from 'components/Search/Search';
import { Title } from 'Pages/MoviesDetails/MoviesDetails.styled';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';


export const Movies = () => {
  const [query, setQuery] = useState('');


  const inputValue = query => {
    setQuery(query);
 

    setItems([]);
    // console.log(query);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        if (query === '') {
          return
        }
        setIsLoading(true);
        const { results, total_results } = await searchByName(query);

        if (!total_results) {
          toast.error('Sorry, but nothing was found for your request');
        }
        if (results) {
          const imagesArray = results.map(
            ({ id, original_title, poster_path, vote_average, vote_count }) => {
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
    fetch();
  }, [query]);
  return (
    <>
      <main>
        <Search onSubmit={inputValue} />
        {items.length > 0 && items ? (
          <MoviesList movies={items} />
        ) : (
          <Title>To search, write the name of the movie in the form </Title>
        )}
        {isLoading && <Loader />}
        <Toaster />
      </main>
    </>
  );
};
