import { useState } from 'react';
import PropTypes from 'prop-types';
import OpenGoals from './OpenGoals';
import CompletedGoals from './ComplitedGoals';
import Modal from './Modal';
import SetNewGoal from './Modals/SetNewGoal';

const Goals = ({ role }) => {
  const [activeTab, setActiveTab] = useState('open');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
  
  return (
    <div className="m-2 p-6 bg-white rounded-[16px] shadow-lg">
      {/* Заголовок и кнопка */}
      <div className="flex gap-[24px] items-center mb-6">
        <h1 className="text-2xl font-sans font-bold text-content-primary">Goals</h1>
        {role === 'admin' && (
          <button
            className="btn-icon px-4 py-2"
            onClick={handleAddGoalClick}
          >
            + Add goal
          </button>
        )}
      </div>

      {/* Вкладки */}
      <div className="flex gap-4 border-b border-border-layer_1 mb-6">
        <button
          className={`text-basic-16-medium ${
            activeTab === 'open' ? 'text-cta-primary border-b-2 border-cta-primary' : 'text-content-secondary'
          } pb-2`}
          onClick={() => handleTabClick('open')}
        >
          Open
        </button>
        <button
          className={`text-basic-16-medium ${
            activeTab === 'completed' ? 'text-cta-primary border-b-2 border-cta-primary' : 'text-content-secondary'
          } pb-2`}
          onClick={() => handleTabClick('completed')}
        >
          Completed
        </button>
      </div>

      {/* Контент вкладок */}
      <div>
        {activeTab === 'open' && <OpenGoals />}
        {activeTab === 'completed' && <CompletedGoals />}
      </div>

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
