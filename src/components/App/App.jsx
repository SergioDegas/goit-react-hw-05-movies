import { GlobalStyle } from '../GlobalStyle';
import { Routes, Route, NavLink } from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';





import styled from 'styled-components';
import { MoviesDetails } from 'Pages/MoviesDetails/MoviesDetails';
import { Movies } from 'Pages/Movies/Movies';
import { NotFound } from 'components/NotFound/NotFound';
import { Home } from 'Pages/Home/Home';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
 
    return (
      <>
      
          <nav>
            <StyledLink to="/" end>
              Home
            </StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:moviesId" element={<MoviesDetails />}>
              <Route path="cast" element={<NotFound />} />
              <Route path="reviews" element={<NotFound />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
      
        <Toaster position="top-right" />
        <GlobalStyle />
      </>
    );
  }

