import { useState } from 'react';
import PropTypes from 'prop-types';
import OpenGoals from './OpenGoals';
import CompletedGoals from './ComplitedGoals';
import Modal from './Modal';
import SetNewGoal from './Modals/SetNewGoal';

const Goals = ({ role }) => {
  const [activeTab, setActiveTab] = useState('open');
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    // Здесь можно добавить логику для обновления списка целей
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
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
