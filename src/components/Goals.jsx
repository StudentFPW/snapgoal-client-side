import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GoalsList from './GoalsList';
import Tasks from './Tasks';

const Goals = ({ role }) => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const mockGoals = [
    { id: 1, title: 'Beach Clean-up', description: 'Clean beaches around Limassol', progress: 0, startDate: '01/05/2025', endDate: '30/05/2025', userCount: 5 },
    { id: 2, title: 'Olive Harvest', description: 'Help with olive harvest', progress: 50, startDate: '01/06/2025', endDate: '30/06/2025', userCount: 3 },
    { id: 3, title: 'Wildlife Protection', description: 'Support local wildlife', progress: 80, startDate: '01/07/2025', endDate: '30/07/2025', userCount: 8 },
  ];

  const handleGoalClick = (goal) => {
    setSelectedGoal(goal); // Открыть компонент Tasks с выбранной целью
  };

  const handleBackToGoals = () => {
    setSelectedGoal(null); // Вернуться к списку целей
  };

  return (
    <div className="m-2 p-6 bg-white rounded-[16px] shadow-lg">
      {selectedGoal ? (
        <Tasks goal={selectedGoal} onBack={handleBackToGoals} role={role} />
      ) : (
        <>
          <div className="flex gap-[24px] items-center mb-6">
            <h1 className="text-2xl font-sans font-bold text-content-primary">Goals</h1>
          </div>
          <GoalsList goals={mockGoals} onGoalClick={handleGoalClick} />
        </>
      )}
    </div>
  );
};

Goals.propTypes = {
  role: PropTypes.oneOf(['admin', 'user']).isRequired,
};

export default Goals;
