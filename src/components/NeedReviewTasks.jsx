import React from 'react';
import TasksList from './TasksList';
import { useAuth } from '../core/AuthContext';

const NeedReviewTasks = ({ tasks }) => {
  const { role } = useAuth();

  return <TasksList tasks={tasks} role={role} />;
};

export default NeedReviewTasks;
