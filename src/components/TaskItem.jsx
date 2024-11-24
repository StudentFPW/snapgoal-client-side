import React, { useState } from 'react';
import PropTypes from 'prop-types';
import coin from '../assets/coin.svg';
import deleteIcon from '../assets/Delete.svg';
import timeIcon from '../assets/Clock.svg';
import avatarUser from '../assets/avatar.svg';
import proof from '../assets/proof.svg';

const TaskItem = ({ task, role }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTaskStarted, setIsTaskStarted] = useState(false);
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleStartTask = (e) => {
    e.stopPropagation();
    setIsTaskStarted(true);
    console.log('Task started');
  };

  const handleFinishTask = (e) => {
    e.stopPropagation();
    setIsTaskStarted(false);
    setIsTaskCompleted(true);
    console.log('Task finished');
  };

  const handleWontFix = (e) => {
    e.stopPropagation();
    setIsTaskStarted(false);
    setIsTaskCompleted(false);
    console.log("Won’t fix clicked. Resetting task.");
  };

  const handleDeleteTask = (e) => {
    e.stopPropagation();
    console.log('Delete task clicked');
  };

  const handleApproveTask = (e) => {
    e.stopPropagation();
    console.log('Approve task clicked');
  };

  const handleReopenTask = (e) => {
    e.stopPropagation();
    console.log('Reopen task clicked');
  };

  return (
    <div
      className={`w-[849px] min-h-[89px] p-4 border ${
        isExpanded ? 'border-cta-primary' : 'border-border_layer_1'
      } rounded-[16px] mb-4 cursor-pointer`}
      onClick={handleToggle}
    >
      {/* Верхняя строка с title и points */}
      <div className="flex justify-between items-center">
        <h2 className="text-basic-16-medium font-sans text-content-primary">{task.title}</h2>
        <div className="flex items-center gap-4">
          {/* Coin и количество */}
          <div className="flex items-center gap-1">
            <img src={coin} alt="coin" className="w-5 h-5" />
            <span className="text-basic-16-medium font-sans text-content-primary">{task.points}</span>
          </div>
        </div>
      </div>
      {/* Строка с description */}
      <p className="mt-2 text-basic-16-regular font-sans text-content-secondary text-start">
        {task.description}
      </p>

      {/* Развернутое состояние */}
      {isExpanded && (
        <div className="mt-4">
          {/* Блок с фидбеком и загрузкой фото */}
          {isTaskCompleted && role === 'user' && (
            <div className="mt-4 mb-4">
              <p className="text-small-14-regular font-sans text-content-secondary">
                Users feedback
              </p>
              <button className="btn-secondary flex items-center gap-2 mt-2">
                <img src={proof} className="w-[16px] h-[16px]"/>
                Check out photo result
              </button>
            </div>
          )}

          {/* Уровень, Приоритет, и Дедлайн */}
          <div className="flex justify-between items-center gap-4 mb-4">
            <div className="flex items-center gap-4">
              <span className="px-2 py-1 border border-border_layer_1 rounded-lg text-small-14-regular text-content-secondary">
                {task.level}
              </span>
              <span className="px-2 py-1 border border-border_layer_1 rounded-lg text-small-14-regular text-content-secondary">
                {task.priority}
              </span>
              <div className="flex items-center gap-2 text-small-14-regular text-content-secondary">
                <img src={timeIcon} alt="Time" className="w-4 h-4" />
                <span>{task.deadline}</span>
              </div>
            </div>

            {/* Роль: admin */}
            {role === 'admin' && (
              task.assignee?.name ? (
                // Если задача уже взята пользователем
                <div className="flex gap-[12px] items-center">
                  <img src={avatarUser} alt="User Avatar" className="w-5 h-5 rounded-full" />
                  <p className="text-small-14-regular font-sans text-content-secondary">
                    {task.assignee.name}
                  </p>
                </div>
              ) : (
                // Если задача свободна
                <button
                  className="btn-icon text-content-secondary hover:text-red-500"
                  onClick={handleDeleteTask}
                >
                  <img src={deleteIcon} alt="Delete" />
                </button>
              )
            )}

            {/* Роль: user */}
            {role === 'user' && !isTaskCompleted && (
              isTaskStarted ? (
                // Если задача начата
                <div className="flex items-center gap-4">
                  <button
                    className="btn-secondary px-4 py-2"
                    onClick={handleWontFix}
                  >
                    Won’t fix
                  </button>
                  <button
                    className="btn-primary px-4 py-2"
                    onClick={handleFinishTask}
                  >
                    Finish task
                  </button>
                </div>
              ) : (
                // Если задача свободна
                <button
                  className="btn-primary px-4 py-2"
                  onClick={handleStartTask}
                >
                  Start task
                </button>
              )
            )}
          </div>

          {/* Действия для admin при завершенной задаче */}
          {role === 'admin' && task.isCompleted && (
            <div className="flex justify-end items-center gap-4">
              <button
                className="btn-secondary px-4 py-2"
                onClick={handleReopenTask}
              >
                Reopen
              </button>
              <button
                className="btn-primary px-4 py-2"
                onClick={handleApproveTask}
              >
                Approve
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    points: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    level: PropTypes.string,
    priority: PropTypes.string,
    deadline: PropTypes.string,
    assignee: PropTypes.shape({
      name: PropTypes.string,
    }),
    isCompleted: PropTypes.bool,
  }).isRequired,
  role: PropTypes.oneOf(['user', 'admin']).isRequired,
};

export default TaskItem;
