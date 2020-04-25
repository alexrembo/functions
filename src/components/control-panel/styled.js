import styled from 'styled-components';
import { TextField, Button as WrapperButton } from '@material-ui/core';

export const Content = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 35px;
`;

export const Input = styled(TextField)`
  > div {
    margin-right: 20px;
    margin-bottom: ${({ error }) => error ? '0' : '22px'};
  }
`;

export const Button = styled(WrapperButton)`
  height: 56px;
`;
