import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OpenTasks from './OpenTasks';
import InProgressTasks from './InProgressTasks';
import NeedReviewTasks from './NeedReviewTasks';
import CompletedTasks from './CompletedTasks';
import Modal from './Modal';
import SetNewTask from './Modals/SetNewTask';
import { useAuth } from '../core/AuthContext';

const Tasks = () => {
  const { role } = useAuth();
  const [activeTab, setActiveTab] = useState('open');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState({
    open: [
      { id: 1, title: 'Beach Clean-up', description: 'Clean beaches around Limassol', points: 10, level: 'Easy', priority: 'Normal', deadline: '01/05/2025', isCompleted: false, assignee: { name: 'John Doe' } },
      { id: 2, title: 'Olive Harvest', description: 'Help with olive harvest in local farms', points: 20, level: 'Medium', priority: 'Major', deadline: '15/06/2025', isCompleted: false, assignee: null },
    ],
    inProgress: [
      { id: 3, title: 'Tree Planting', description: 'Plant 50 trees in the park.', points: 15, level: 'Easy', priority: 'Normal', deadline: '20/05/2025', isCompleted: false, assignee: { name: 'Jane Doe' } },
    ],
    needReview: [
      { id: 4, title: 'Wildlife Protection Report', description: 'Prepare a report on wildlife protection.', points: 25, level: 'Challenging', priority: 'Critical', deadline: '10/06/2025', isCompleted: false, assignee: { name: 'Alice Smith' } },
    ],
    completed: [
      { id: 5, title: 'Community Workshop', description: 'Organized a workshop for community members.', points: 30, level: 'Medium', priority: 'Normal', deadline: '01/04/2025', isCompleted: true, assignee: { name: 'Jane Doe' } },
    ],
  });

  // Обработчик смены вкладок
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Обработчик открытия модального окна
  const handleAddTaskClick = () => {
    setIsModalOpen(true);
  };

  // Обработчик закрытия модального окна
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Обработчик добавления новой задачи
  const handleTaskSubmit = (newTask) => {
    const newTaskWithId = { ...newTask, id: Date.now(), isCompleted: false, assignee: null };
    setTasks((prevTasks) => ({
      ...prevTasks,
      open: [...prevTasks.open, newTaskWithId], // Добавляем задачу в список открытых задач
    }));
    setIsModalOpen(false);
  };

  return (
    <div className="m-2 p-6 bg-white rounded-[16px] shadow-lg">
      {/* Заголовок */}
      <div className="flex gap-[24px] items-center mb-6">
        <h1 className="text-2xl font-sans font-bold text-content-primary">Tasks</h1>
        {role === 'admin' && (
          <button
            className="btn-icon px-4 py-2"
            onClick={handleAddTaskClick}
          >
            + Add task
          </button>
        )}
      </div>

      {/* Вкладки */}
      <div className="flex gap-4 border-b border-border-layer_1 mb-6">
        {['open', 'inProgress', 'needReview', 'completed'].map((tab) => (
          <button
            key={tab}
            className={`text-basic-16-medium ${
              activeTab === tab
                ? 'text-cta-primary border-b-2 border-cta-primary'
                : 'text-content-secondary'
            } pb-2`}
            onClick={() => handleTabClick(tab)}
          >
            {tab
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, (str) => str.toUpperCase())}
          </button>
        ))}
      </div>

      {/* Контент вкладок */}
      <div>
        {activeTab === 'open' && <OpenTasks tasks={tasks.open} />}
        {activeTab === 'inProgress' && <InProgressTasks tasks={tasks.inProgress} />}
        {activeTab === 'needReview' && <NeedReviewTasks tasks={tasks.needReview} />}
        {activeTab === 'completed' && <CompletedTasks tasks={tasks.completed} />}
      </div>

      {/* Модальное окно для добавления задачи */}
      {role === 'admin' && (
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <SetNewTask onClose={handleModalClose} onSubmit={handleTaskSubmit} />
        </Modal>
      )}
    </div>
  );
};

Tasks.propTypes = {
  role: PropTypes.oneOf(['admin', 'user']).isRequired,
};

export default Tasks;
