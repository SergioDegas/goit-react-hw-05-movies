import styled from 'styled-components';

export const Form = styled.form`
 
  top: 0;
  display: flex;
 margin-left: 40px;
justify-content: center;
  margin: 0 auto;

  padding: 10px;

`;
export const Input = styled.input`
  margin-left: 40px;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  margin-right: 0;
  width: 300px;
`;
export const SearchBtn = styled.button`
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  background-color: #1aa3ff;
  color: #000;
  &:hover,
  &:focus {
    background-color: #5aa3ff;
    color: #fff;
  }
`;
