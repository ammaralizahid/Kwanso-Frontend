import React from 'react';
import styled from 'styled-components';

interface TaskCardProps {
  id: number;
  name: string;
}

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  max-width: 200px;
`;

const TaskCard: React.FC<TaskCardProps> = ({ id, name }) => {
  return (
    <CardContainer>
      <h3>Task {id}</h3>
      <p>{name}</p>
    </CardContainer>
  );
};

export default TaskCard;