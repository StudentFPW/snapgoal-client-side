import React from 'react';
import TasksList from './TasksList';

const InProgressTasks = ({ tasks, role }) => {
  return <TasksList tasks={tasks} role={role} />;
};

export default InProgressTasks;
