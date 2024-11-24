import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

const TasksList = ({ tasks }) => {
  return (
    <div className="p-4 bg-background">
      <div className="space-y-4">
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <p className="text-content-secondary">There are no tasks now!</p>
        )}
      </div>
    </div>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      points: PropTypes.number.isRequired,
      level: PropTypes.string,
      priority: PropTypes.string,
      deadline: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TasksList;
