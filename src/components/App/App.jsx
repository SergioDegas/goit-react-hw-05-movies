import { GlobalStyle } from '../GlobalStyle';
import { Routes, Route,} from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';
import { MoviesDetails } from 'Pages/MoviesDetails/MoviesDetails';
import { Movies } from 'Pages/Movies/Movies';
import { Home } from 'Pages/Home/Home';
import Card from 'components/Card/Card';
import Reviews from 'components/Reviews/Reviews';
import {  ContainerFlex, StyledLink } from './App.styled';



export const App = () => {
 
    return (
      <>
        <header>
          <ContainerFlex>
            <StyledLink to="/" end>
              Home
            </StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </ContainerFlex>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:moviesId" element={<MoviesDetails />}>
            <Route path="cast" element={<Card />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>

        <Toaster position="top-right" />
        <GlobalStyle />
      </>
    );
  }

