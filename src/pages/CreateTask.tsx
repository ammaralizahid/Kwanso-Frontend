import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { StyledLink } from '../styles/LinkStyle';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CreateTask = () => {
  const [taskName, setTaskName] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      name: taskName,
    };

    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = [...storedTasks, newTask];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    navigate('/list-tasks');
  };

  return (
    <Container>
      <h1>Create Task</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={handleInputChange}
        />
        <Button type="submit">Create Task</Button>
      </Form>
      <StyledLink to="/list-tasks">Back to Task List</StyledLink>
    </Container>
  );
};

export default CreateTask;