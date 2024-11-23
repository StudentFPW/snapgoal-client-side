import React from 'react';

const Goal = ({ goal }) => {
  return (
    <div className="p-4 border rounded shadow-sm bg-white mb-2">
      <h2 className="text-lg font-bold">{goal.title}</h2>
      <p className="text-gray-600">{goal.description}</p>
      <p className="text-sm text-gray-500">Timeline: {goal.deadline}</p>
    </div>
  );
};

export default Goal;
