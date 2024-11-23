import React from 'react';
import PropTypes from 'prop-types';
import coin from '../assets/coin.svg';
import proof from '../assets/proof.svg';

const TaskItem = ({ task, actionButtons, joinButton, finishButton, iconButton }) => {
  return (
    <div className="w-[849px] min-h-[89px] p-4 border border-border_layer_1 rounded-[16px] mb-4">
      {/* Верхняя строка с title и points + кнопки */}
      <div className="flex justify-between items-center">
        <h2 className="text-basic-16-medium font-sans text-content-primary">{task.title}</h2>
        <div className="flex items-center gap-4">
          {/* Coin и количество */}
          <div className="flex items-center gap-1">
            <img src={coin} alt="coin" className="w-5 h-5" />
            <span className="text-basic-16-medium font-sans text-content-primary">{task.points}</span>
          </div>
          {/* Кнопки действия */}
          {actionButtons && (
            <>
              <button className="btn-primary">Approve</button>
              <button className="btn-secondary">Reopen</button>
            </>
          )}
          {joinButton && <button className="btn-primary">Join</button>}
          {finishButton && <button className="btn-primary">Finish</button>}
          {iconButton && (
            <button className="btn-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5v-9m0 0L8.25 11.25M12 7.5l3.75 3.75M21 21H3"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      {/* Строка с description */}
      <p className="mt-2 text-basic-16-regular font-sans text-content-secondary text-start">{task.description}</p>
      {/* Дополнительная строка под description для actionButtons */}
        {actionButtons && (
        <div className="w-[185px]  mt-4 flex items-center gap-2 border border-dashed border-border-layer_1 p-2 rounded">
          <img src={proof} className="w-5 h-5 text-content-secondary" />
          <span className="text-small-14-regular font-sans text-content-secondary">Check photo proof</span>
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
  }).isRequired,
  actionButtons: PropTypes.bool, // Отображение Approve и Reopen
  joinButton: PropTypes.bool, // Отображение Join
  finishButton: PropTypes.bool, // Отображение Finish
  iconButton: PropTypes.bool, // Отображение кнопки-иконки
};

TaskItem.defaultProps = {
  actionButtons: false,
  joinButton: false,
  finishButton: false,
  iconButton: false,
};

export default TaskItem;
