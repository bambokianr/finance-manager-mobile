import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  height: 60px;
  background: #232129;
  border-radius: 10px;
  justify-content: center;
  border: 2px solid #232129;
  color: #F1F2F6;
  padding: 16px;
  margin-bottom: 8px;

  ${props => props.isErrored && css`
    border-color: #c53030;
  `}
  
  ${props => props.isFocused && css`
    border-color: #ff9000;
  `}
`;