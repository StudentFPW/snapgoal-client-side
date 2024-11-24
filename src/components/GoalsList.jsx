import React from 'react';
import PropTypes from 'prop-types';
import GoalItem from './GoalItem';

const GoalsList = ({ goals, onGoalClick }) => {
  return (
    <div className="p-4  grid grid-cols-1 md:grid-cols-2 gap-4">
      {goals.length > 0 ? (
        goals.map((goal) => (
          <GoalItem key={goal.id} goal={goal} onClick={onGoalClick} />
        ))
      ) : (
        <p className="text-gray-500">There are no goals at the moment!</p>
      )}
    </div>
  );
};

GoalsList.propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      progress: PropTypes.number.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      userCount: PropTypes.number.isRequired,
    })
  ).isRequired,
  onGoalClick: PropTypes.func.isRequired,
};

export default GoalsList;
