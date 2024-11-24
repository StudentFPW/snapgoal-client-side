import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OpenTasks from './OpenTasks';
import InProgressTasks from './InProgressTasks';
import NeedReviewTasks from './NeedReviewTasks';
import CompletedTasks from './CompletedTasks';

const Tasks = ({ role }) => {
  const [activeTab, setActiveTab] = useState('open');

  // Моковые данные
  const mockTasks = {
    open: [
      { id: 1, title: 'Open Task 1', description: 'This is an open task.', points: 10, level: 'Easy', priority: 'Normal', deadline: 'dd/mm/yyyy' },
      { id: 2, title: 'Open Task 2', description: 'This is another open task.', points: 20, level: 'Medium', priority: 'Major', deadline: 'dd/mm/yyyy' },
    ],
    inProgress: [
      { id: 3, title: 'In Progress Task 1', description: 'This task is in progress.', points: 15, level: 'Easy', priority: 'Normal', deadline: 'dd/mm/yyyy' },
    ],
    needReview: [
      { id: 4, title: 'Need Review Task 1', description: 'This task needs review.', points: 25, level: 'Challenging', priority: 'Major', deadline: 'dd/mm/yyyy' },
    ],
    completed: [
      { id: 5, title: 'Completed Task 1', description: 'This task is completed.', points: 30, level: 'Medium', priority: 'Normal', deadline: 'dd/mm/yyyy' },
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="m-2 p-6 bg-white rounded-[16px] shadow-lg">
      {/* Заголовок */}
      <h1 className="text-2xl font-sans font-bold text-content-primary mb-6">Tasks</h1>

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
            activeTab === 'inProgress' ? 'text-cta-primary border-b-2 border-cta-primary' : 'text-content-secondary'
          } pb-2`}
          onClick={() => handleTabClick('inProgress')}
        >
          In Progress
        </button>
        <button
          className={`text-basic-16-medium ${
            activeTab === 'needReview' ? 'text-cta-primary border-b-2 border-cta-primary' : 'text-content-secondary'
          } pb-2`}
          onClick={() => handleTabClick('needReview')}
        >
          Need Review
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
        {activeTab === 'open' && <OpenTasks tasks={mockTasks.open} role={role} />}
        {activeTab === 'inProgress' && <InProgressTasks tasks={mockTasks.inProgress} role={role} />}
        {activeTab === 'needReview' && <NeedReviewTasks tasks={mockTasks.needReview} role={role} />}
        {activeTab === 'completed' && <CompletedTasks tasks={mockTasks.completed} role={role} />}
      </div>
    </div>
  );
};

Tasks.propTypes = {
  role: PropTypes.oneOf(['admin', 'user']).isRequired,
};

export default Tasks;
