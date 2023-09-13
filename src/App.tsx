import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TaskList from './pages/TaskList';
import CreateTask from './pages/CreateTask';
import BulkDelete from './pages/BulkDelete';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/list-tasks" />} />
        <Route path="/list-tasks" element={<TaskList />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/bulk-delete" element={<BulkDelete />} />
      </Routes>
    </Router>
  );
}

export default App;