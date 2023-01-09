import {
  AdditionalInfoItem,
  AdditionalTitle,
} from 'Pages/MoviesDetails/MoviesDetails.styled';
import { useLocation } from 'react-router-dom';


export const Additional = () => {
  const location = useLocation();
  const goBack = { from: location.state?.from } ?? '/';

  return (
    <>
      <AdditionalTitle>Additional information</AdditionalTitle>
      <AdditionalInfoItem to="cast" state={goBack}>
        Cast
      </AdditionalInfoItem>
      <AdditionalInfoItem to="reviews" state={goBack}>
        Reviews
      </AdditionalInfoItem>
    </>
  );
};
