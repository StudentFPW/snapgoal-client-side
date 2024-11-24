import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GoalsList from './GoalsList';
import Tasks from './Tasks';
import Modal from './Modal';
import SetNewGoal from './Modals/SetNewGoal';
import { useAuth } from '../core/AuthContext';

const Goals = () => {
  const { role } = useAuth();
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mockGoals = [
    { id: 1, title: 'Beach Clean-up', description: 'Clean beaches around Limassol', progress: 0, startDate: '01/05/2025', endDate: '30/05/2025', userCount: 5 },
    { id: 2, title: 'Olive Harvest', description: 'Help with olive harvest', progress: 50, startDate: '01/06/2025', endDate: '30/06/2025', userCount: 3 },
    { id: 3, title: 'Wildlife Protection', description: 'Support local wildlife', progress: 80, startDate: '01/07/2025', endDate: '30/07/2025', userCount: 8 },
  ];

  const handleGoalClick = (goal) => {
    setSelectedGoal(goal); 
  };

  const handleBackToGoals = () => {
    setSelectedGoal(null); 
  };

  const handleAddGoalClick = () => {
    setIsModalOpen(true); 
  };

  const handleModalClose = () => {
    setIsModalOpen(false); 
  };

  const handleGoalSubmit = (newGoal) => {
    console.log('New goal submitted:', newGoal);
    setIsModalOpen(false);
  };

  return (
    <div className="m-2 p-6 bg-white rounded-[16px] shadow-lg">
      {selectedGoal ? (
        <Tasks goal={selectedGoal} onBack={handleBackToGoals} role={role} />
      ) : (
        <>
          <div className="flex gap-[24px] items-center mb-6">
            <h1 className="text-2xl font-sans font-bold text-content-primary">Goals</h1>
            {role === 'admin' && (
              <button
                className="btn-icon px-4 py-2"
                onClick={handleAddGoalClick}
              >
                + Add Goal
              </button>
            )}
          </div>
          <GoalsList goals={mockGoals} onGoalClick={handleGoalClick} />
        </>
      )}

      {/* Модальное окно для добавления цели */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <SetNewGoal onClose={handleModalClose} onSubmit={handleGoalSubmit} />
      </Modal>
    </div>
  );
};

Goals.propTypes = {
  role: PropTypes.oneOf(['admin', 'user']).isRequired,
};

export default Goals;
