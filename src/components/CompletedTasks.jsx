import React from 'react';
import TasksList from './TasksList';

const CompletedTasks = ({ tasks, role }) => {
  return <TasksList tasks={tasks} role={role} />;
};

export default CompletedTasks;
