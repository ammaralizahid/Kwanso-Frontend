import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-block;
  margin: 0px 10px;
  padding: 10px 20px;
  text-decoration: underline;
  color: #007bff;
  border-radius: 4px;
  transition: background-color 0.3s ease;
`;