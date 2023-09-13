import React, { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import styled from 'styled-components';
import { StyledLink } from '../styles/LinkStyle';

interface Task {
  id: number;
  name: string;
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TaskSection = styled.section`
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: #333;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  return (
    <Container>
      <h1>Task List</h1>
      {tasks.map((task) => (
        <TaskSection key={task.id}>
          <TaskCard id={task.id} name={task.name} />
        </TaskSection>
      ))}
      <StyledLink to="/create-task">Create Task</StyledLink>
      <StyledLink to="/bulk-delete">Bulk Delete</StyledLink>
    </Container>
  );
};

export default TaskList;