import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const Container = styled.div`
  margin-right: 50px;
  margin-left: 50px;
`;
export const ContainerFlex = styled.div`
display: flex;
 justify-content: center;
 margin-bottom: 20px;
 margin-top: 20px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;

  font-size: 30px;
  color: black;
  margin-right: 20px;
  cursor: pointer;
  :last-child {
    margin: 0;
  }

  &.active {
    color: #1aa3ff;
  }
  :hover {
    color: #8aa3ff;
  }
`;

export const H1 = styled.h1`
  color: ${({ theme }) => `${theme.colors.blue}`};
  padding-bottom: ${({ theme }) => `${theme.spacing(3)}`}; ;
`;
export const H2 = styled.h2`
  color: ${({ theme }) => `${theme.colors.blue}`};
  padding-bottom: ${({ theme }) => `${theme.spacing(3)}`}; ;
`;