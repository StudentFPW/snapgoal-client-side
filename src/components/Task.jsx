import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task }) => {
  return (
    <div className="p-4 border rounded shadow-sm bg-white mb-2">
      <h2 className="text-lg font-bold">{task.title}</h2>
      <p className="text-gray-600">{task.description}</p>
      <p className="text-sm text-gray-500">Users: {task.value}</p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  }).isRequired,
};

export default Task;
