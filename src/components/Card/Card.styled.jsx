import styled from 'styled-components';
export const ActorsImage = styled.img`
  width: 100%;
  height: 331px;
  object-fit: contain;
  border-radius: 5px;
  // -webkit-transform: scale(1);
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.15);
  }
`;
export const Actors = styled.li`
height: 400px;
width: 330px;
`