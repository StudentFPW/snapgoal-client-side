import React from 'react';
import TasksList from './TasksList';

const OpenTasks = ({ tasks, role }) => {
  return <TasksList tasks={tasks} role={role} />;
};

export default OpenTasks;
