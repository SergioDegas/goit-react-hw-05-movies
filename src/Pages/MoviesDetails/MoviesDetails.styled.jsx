import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBack = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 8px;
  height: 54px;
  margin-left: 10px;
  margin-bottom: 8px;
  color: #000000;
  border-radius: 10px;
  text-decoration: none;
  border: 0;
  background-color: #1aa3ff;
  color: #000;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: #5aa3ff;
    color: #fff;
  }
`;

export const MovieCard = styled.div`
  display: flex;

  gap: 20px;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: 320px;
  border-radius: 5px;
`;

export const Title = styled.h2`
  font-size: 23px;
  margin-bottom: 5px;
  height: 60px;
  color: #000;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const InfoTitle = styled.p`
margin-left: 10px;
  font-weight: 600;
  color: #1aa3ff;
  text-decoration: none;
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const Info = styled.span`
  font-weight: 400;
  color: #000000;
  text-decoration: none;
`;
export const Genres = styled.ul`
  display: flex;
  gap: 10px;
`;
export const AdditionalTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 35px;
`;

export const AdditionalInfoItem = styled(Link)`
  cursor: pointer;
  font-size: 30px;
  text-decoration: none;
  color: #000099;
  font-weight: 500;
  display: block;
  :not(:last-child) {
    margin-bottom: 8px;
  }
  &:hover {
    color: #33cc33;
  }
 
`;