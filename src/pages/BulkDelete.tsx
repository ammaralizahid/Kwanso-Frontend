import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledLink } from '../styles/LinkStyle';

interface Task {
  id: number;
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TaskContainer = styled.div`
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const BulkDelete: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  const handleCheckboxChange = (taskId: number) => {
    const updatedSelectedTasks = selectedTasks.includes(taskId)
      ? selectedTasks.filter((id) => id !== taskId)
      : [...selectedTasks, taskId];

    setSelectedTasks(updatedSelectedTasks);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedTasks([]);
    } else {
      setSelectedTasks(tasks.map(task => task.id));
    }
    setSelectAll(!selectAll);
  };

  const handleDelete = () => {
    const updatedTasks = tasks.filter((task) => !selectedTasks.includes(task.id));
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setSelectedTasks([]);
    setSelectAll(false);
  };

  return (
    <Container>
      <h1>Bulk Delete</h1>
      {tasks.length > 0 && (
        <>
          <TaskContainer>
            <Checkbox
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
            />
            Select All
          </TaskContainer>
          {tasks.map((task) => (
            <TaskContainer key={task.id}>
              <Checkbox
                type="checkbox"
                checked={selectedTasks.includes(task.id)}
                onChange={() => handleCheckboxChange(task.id)}
              />
              Task {task.id}
            </TaskContainer>
          ))}
          <Button onClick={handleDelete}>Delete Selected Tasks</Button>
        </>
      )}
      <StyledLink to="/list-tasks">Back to Task List</StyledLink>
    </Container>
  );
};

export default BulkDelete;