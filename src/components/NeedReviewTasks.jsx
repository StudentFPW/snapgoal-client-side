import React from 'react';
import TasksList from './TasksList';

const NeedReviewTasks = ({ tasks, role }) => {
  return <TasksList tasks={tasks} role={role} />;
};

export default NeedReviewTasks;
